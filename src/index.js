import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ContactForm from './components/ContactForm';

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="col-md-6 offset-md-3">
                <Header />
                <ContactForm />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

