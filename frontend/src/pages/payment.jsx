import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

function PaymentForm() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform payment here

        if (!error) {
            setSuccess(true);
            setError('');
        } else {
            setError('Payment failed. Please check your information.');
            setSuccess(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Card Number</label>
                <input
                    value={cardNumber}
                    onChange={(event) => setCardNumber(event.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Expiry Date</label>
                <input
                    value={expiryDate}
                    onChange={(event) => setExpiryDate(event.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>CVV</label>
                <input value={cvv} onChange={(event) => setCvv(event.target.value)} />
            </Form.Field>
            {error && <Message negative>{error}</Message>}
            {success && <Message positive>Payment successful</Message>}
            <Button type="submit">Make Payment</Button>
        </Form>
    );
}

export default PaymentForm;
