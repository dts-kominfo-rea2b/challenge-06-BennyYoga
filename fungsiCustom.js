// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const Split_Word = (word) => {
  const temp = word?.split(' ');
  return temp[1];
}

const process_data = (file) => {
  let temp_word = '';

  if (file?.message !== undefined) {
    temp_word = file?.message;
  }
  else if (file[0]?.message !== undefined) {
    temp_word = file[0]?.message
  }
  else if (file[0]?.data?.message !== undefined) {
    temp_word = file[0]?.data?.message
  }
  return Split_Word(temp_word);
}


const bacaData = (fnCallback) => {
  let List_File = [file1, file2, file3]
  let result = [];

  List_File.forEach(item => {
    fs.readFile(item, 'utf-8', (err, data) => {
      if (err) {
        return fnCallback(err)
      }
      let object = JSON.parse(data)
      let temp = process_data(object);
      result.push(temp);
      if (result.length === 3) {
        return fnCallback(null, result)  
      }
      else{
        return result;
      }
    })
  });
};

bacaData((err, data) =>{
  if(err) {
    console.log(err);
  }
  console.log(data);
})

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
