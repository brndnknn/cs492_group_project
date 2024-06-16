from flask import Flask, render_template, request, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a strong secret key

products = [
    {"id": 1, "name": "Product 1", "price": 10.00},
    {"id": 2, "name": "Product 2", "price": 20.00},
    {"id": 3, "name": "Product 3", "price": 30.00},
]


@app.route('/')
def home():
    return render_template('home.html', products=products)


@app.route('/cart', methods=['GET', 'POST'])
def cart():
    if request.method == 'POST':
        # Add item to cart
        product_id = int(request.form['product_id'])
        if 'cart' not in session:
            session['cart'] = []
        # Check if product already exists in cart
        exists = False
        for item in session['cart']:
            if item['id'] == product_id:
                exists = True
                break
        if not exists:
            # Add product to cart
            session['cart'].append({
                'id': product_id,
                'name': [product for product in products if product['id'] == product_id][0]['name'],
                'price': [product for product in products if product['id'] == product_id][0]['price'],
                'quantity': 1
            })
    cart_items = session.get('cart', [])
    total_price = sum(item['price'] * item['quantity'] for item in cart_items)
    return render_template('cart.html', cart_items=cart_items, total_price=total_price)


if __name__ == '__main__':
    app.run(debug=True)
