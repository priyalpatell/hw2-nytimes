import pytest
from app import app
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path='../.env')

@pytest.fixture
def client():
	with app.test_client() as client:
		yield client

# tests retrieving api key
def test_get_key(client):
	response = client.get('/api/key')
	assert response.status_code == 200
	assert response.content_type == 'application/json'
	data = response.get_json()
	assert 'apiKey' in data
	assert len(data['apiKey']) > 0
	assert isinstance(data['apiKey'], str)
	