import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

// Get today's date
let date: Date = new Date();
let formattedDate: String = new Intl.DateTimeFormat('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
    }).format(date);
const dateElement = document.getElementById('date');
if (dateElement) {
  dateElement.innerHTML = formattedDate;
}

export default app