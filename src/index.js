const vision = require('@google-cloud/vision');
const path = require('path')

async function detectText() {
  const client = new vision.ImageAnnotatorClient()

  const fileName = path.join(__dirname, '../images/hello-world.png')
  const [result] = await client.textDetection(fileName)
  
  const code = result.textAnnotations[0].description;
  eval(`(function () { ${code} })()`)
}

detectText()
