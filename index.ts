import fs from "fs"

const format = async () => {
  //join
  let joinedData: Array<any> = []
  for (let i = 0; i < 46; i++) {
    const data: Array<any> = JSON.parse(await fs.readFileSync(`/Users/owner/Downloads/KaraokeClassifierData/TrainingData/labeledImgData/d${i + 1}.json`, 'utf8'))
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