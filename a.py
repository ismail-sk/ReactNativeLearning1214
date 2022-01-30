from flask import Flask, render_template, request, jsonify, url_for, redirect, session

app = Flask(__name__)
@app.route('/', methods = ['GET', 'POST'])
def index():
   if request.method == 'POST':
       date = request.form.get('date')
       session["date"] = date
       return redirect(url_for('booking', date=date))

   return render_template('main/index.html')


@app.route('/booking')
def booking():
   date = session.get("date")
   return render_template('main/booking.html', date=date)

if __name__ == '__main__':
    app.run(debug=True)