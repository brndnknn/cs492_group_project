from flask import Flask, jsonify, request  # type: ignore
from flask_cors import CORS # type: ignore
import json
import os
import datetime


app = Flask(__name__)
cors = CORS(app)

if not os.path.exists('orders'):
    os.makedirs('orders')

def load_menu():
    with open('menu.json') as f:
        return json.load(f)

@app.route('/api/menu', methods=['GET'])
def menu():
    menu = load_menu()
    return jsonify(menu)

@app.route('/api/order', methods=['POST'])
def place_order():
    order_data = request.get_json()
    if not order_data:
        return jsonify({'error': 'Invalid order data'}), 400
    
    timestamp = datetime.datetime.now().strftime('%Y%m%d%H%M%S%f')
    order_filename = os.path.join('orders', f'order_{timestamp}.json')

    with open(order_filename, 'w') as f:
        json.dump(order_data, f, indent=4)

    return jsonify({"message": "Order placed successfully!"}), 200

if __name__ == '__main__':
    app.run(debug=True, port="5050")
