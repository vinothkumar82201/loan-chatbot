exports.handler = async function(event) {
  try {

    const body = JSON.parse(event.body);

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const response = await fetch(
      "https://n8n-7bem.onrender.com/webhook/593b5154-29c5-4a2c-a47b-dfdf59db9e40",
      {
        method: "POST",
        headers: {
  "Content-Type": "application/json",
  "Accept": "*/*"
},
        body: JSON.stringify(body)
      }
    );

    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: data
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString()
    };
  }
};