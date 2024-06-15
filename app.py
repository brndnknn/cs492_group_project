# app.py
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/account', methods=['GET', 'POST'])
def account():
    if request.method == 'POST':
        # Handle sign up or login
        pass
    return render_template('account.html')

@app.route('/order', methods=['POST'])
def order():
    # Handle order submission
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
