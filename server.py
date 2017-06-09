import pandas as pd
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/overview")
def overview():
    q = request.args.get("q")
    data = pd.read_csv("data.csv", sep=";")

    result = data.query("gemeente == '%s'" % q).sort_values("bedrag", 0, False).to_json(orient="records")

    return render_template("overview.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)