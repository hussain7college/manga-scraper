import axios from 'axios';
import * as cheerio from 'cheerio';
import { initDB, connectDB, disconnectDB } from './db.js';
import fs from 'fs';

// await initDB();
initDirectories();
// getManga('https://olympustaff.com/series/ysqvgdbl', 160, 162).then((data) => {
//   console.log(data);
// });

export async function getManga(url, start, end) {
  const chapters = [];
  for (let i = start; i <= end; i++) {
    const chapter = await getChapter(`${url}/${i}`);
    chapters.push(chapter);
  }
  // // store chapters in db
  // const db = connectDB();
  // const sqlValues = chapters.map((chapter) => {
  //   return `('${chapter.title}', ${chapter.number}, '${JSON.stringify(chapter.images)}')`;
  // });
  // await db.exec(`INSERT INTO manga (title, number, images) VALUES ${sqlValues.join(',')}`);
  // disconnectDB(db);

  // download images to local
  chapters.forEach((chapter) => {
    downloadImages(chapter.images, 'الدورة التعليمية صعبة للغاية', chapter.number);
  });
}



async function getChapter(url) {
  const data = await axios.get(url);
  const $ = cheerio.load(data.data);
  // get all data inside .quote class
  const chapter = {
    title: $('#chapter-heading').text(),
    number: Number(url.split('/').pop()),
    images: [],
  };
  $('.image_list').children().each((i, elem) => {
    const imgSrc = $(elem).find('.manga-chapter-img').attr('src');
    if (imgSrc) {
      chapter.images.push(imgSrc);
    }
  });

  return chapter;
}


function downloadImages(urls, mangaName, chapterNo) {
  const mangaDir = `./downloads/${mangaName}`;
  if (!fs.existsSync(mangaDir)) {
    fs.mkdirSync(mangaDir);
  }
  const dir = `${mangaDir}/${chapterNo}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  urls.forEach((url, i) => {
    downloadImage(url, `${dir}/${i + 1}.jpg`);
  });
}


async function downloadImage(url, path) {
  console.log('✅url', url);
  axios({
    url,
    responseType: 'stream',
  }).then((response) => {
    response.data.pipe(fs.createWriteStream(path));
  });
}


function initDirectories() {
  if (!fs.existsSync('./downloads')) {
    fs.mkdirSync('./downloads');
  }
}