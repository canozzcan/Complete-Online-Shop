const db = require('../data/database');

class Order{
    // Status => pending, fulfilled, cancelled
    constructor(cart, userData, status = 'pending', date, orderId) {
        this.productData = cart;
        this.userData = userData;
        this.status = status;
        this.date = new Date(date);
        this.formatted = this.date.toLocaleDateString('en-US', {
            weekday: 'short',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        this.id = orderId;
    }

    save() {
        if (this.id) {
            // updating
        } else {
            const orderDocument = {
                userData: this.userData,
                productData: this.productData,
                date: new Date(),
                status: this.status
            };

            return db.getDb().collection('orders').insertOne(orderDocument);
        }
    }
}

module.exports = Order;