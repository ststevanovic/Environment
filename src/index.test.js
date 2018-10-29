import {expect} from "chai";
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', ()=> {
  it("should pass", () => {
    expect(true).to.equal(true);
  })
});

// w/o firing up the browser
describe('index.html', () => {
  // async test
  it("should have h1 that says Users", (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8')
    // define jsdom environment
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close()
    })
  })
})

// run tests on save === test:watch


