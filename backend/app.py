from flask import Flask, jsonify, send_from_directory
import os
import requests
from flask_cors import CORS

static_path = os.getenv('STATIC_PATH','static')
template_path = os.getenv('TEMPLATE_PATH','templates')

app = Flask(__name__, static_folder=static_path, template_folder=template_path)
CORS(app)

# @app.route('/format/articles/<data>')
# def format_articles(data):

def get_data(key, city):
    base_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    filters = 'fq=timesTag.location:'+city
    query_url = base_url + filters + "&api-key=" + key
    result = requests.get(query_url)
    return result

    
@app.route('/get/articles/<key>') 
def get_articles(key):
    resultD = get_data(key, "Davis")
    resultS = get_data(key, "Sacramento")
    if resultD.status_code != 200 and resultS.status_code != 200:
        return resultD
    
    result = []
    try:
        result.extend((resultD.json())['response']['docs'])
    except:
        pass
    try:
        result.extend((resultS.json())['response']['docs'])
    except:
        pass
    return {"RESULT": result}

    
@app.route('/api/key')
def get_key():
    return jsonify({'apiKey': os.getenv('NYT_API_KEY')})

@app.route('/')
@app.route('/<path:path>')
def serve_frontend(path=''):
    if path != '' and os.path.exists(os.path.join(static_path,path)):
        return send_from_directory(static_path, path)
    return send_from_directory(template_path, 'index.html')

if __name__ == '__main__':
    debug_mode = os.getenv('FLASK_ENV') != 'production'
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8000)),debug=debug_mode)