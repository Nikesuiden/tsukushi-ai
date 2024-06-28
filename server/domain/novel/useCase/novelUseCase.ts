import { load, html } from 'cheerio';
import { decode } from 'iconv-lite';
import { transaction } from 'service/prismaClient';

//スクレイピング//
export const novelUseCase = {
  scrape: (aozoraUrl: string): Promise<string> =>
    transaction('RepeatableRead' , async (tx) =>  {
      const buffer = await fetch(aozoraUrl).then( b => b.arrayBuffer())
      const html = decode(Buffer.from(buffer) , 'Shift_JIS')
      const $ = load(html)
      return $('body').text()
    })

};
