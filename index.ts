import fs from "fs"

const BASE_PATH = "/Users/owner/Downloads/KaraokeClassifierData/TrainingData/labeledImgData"
const NUM = 46

const format = async () => {
  //join
  let joinedData: Array<any> = []
  for (let i = 0; i < NUM; i++) {
    const data: Array<any> = JSON.parse(await fs.readFileSync(`${BASE_PATH}/d${i + 1}.json`, 'utf8'))
    joinedData = joinedData.concat(data)
  }

  //format
  const formatted = joinedData.map((item) => ({
    imagefilename: item["image"],
    annotation: item["annotations"]
  }
  ))

  //write
  const json = JSON.stringify(formatted, null, 2)
  try {
    fs.writeFileSync("output.json", json)
  } catch (err) {
    console.log(err)
  }
}

format()