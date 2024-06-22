from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return "<h1>Hello</h1>"

@app.route("/home/<place>")
def home(place):
    links = ["https://www.google.com","https://www.youtube.com","https://www.python.org"]
    return render_template("example.html", links = links)

if __name__ == "__main__":
    app.run(debug = True)