import React from 'react'
// import NavBar from '../../../components/navbar/NavBar'
import NavBarUser from '../../components/navbar/NavBarUser'
import Helmet from "react-helmet";
import {Link} from "react-router-dom";
import '../../styles/Articles.scss'


const BiologyArticle = () => {

  const documentTitle = 'Learnr | Mathematics for Js1'

  const getBiologyArticle = JSON.parse(localStorage.getItem('learnrBiologyArticleBody'))

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Topics relating to Mathematics for Js1 students"
        />
      </Helmet>
      <div>
        {/*<NavBar />*/}
        <NavBarUser />
      </div>
      <div className="container">
        <div className="article-wrap">
          <div className="page-selector">
            <span className="selected-page">Article</span>
            {/* <span className="unselected-page">Quiz</span> */}
          </div>
          <h3 className="article-subject">Biology</h3>
          {/* <p className="article-topic">Development of number systems; counting, symbols for numbers and the place-value system</p> */}
          <div className="d-flex">
            <Link to='/biology/topics' className="">Topics&nbsp;&gt;</Link>
            <span className="d-block pl-2">{getBiologyArticle.articleTopic}</span>
          </div>
        </div>
        <div className="video-wrap">
          {getBiologyArticle.articleContent}
          {/* <iframe width="650" height="480" src="https://www.youtube.com/embed/ku4KOFQ-bB4" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe> */}
        </div>
        <div className="main-article">
          <article className="section-article">
            <h5 className="section-heading">Introduction</h5>
            <p className="section-paragraph">
              As we begin our journey through the history of mathematics, one question to be asked is “Where do we start?”
              Depending on how you view mathematics or numbers, you could choose any of a number of launching points from which to begin. Howard Eves suggests the following list of possibilities.<br />
              The first will be an examination of basic number and counting systems and the symbols that we use for numbers.
              We will look at our own modern (Western) number system as well those of a couple of selected civilizations to see the differences and diversity that is possible when humans start counting.
              The second idea we will look at will be base systems. By comparing our own base-ten (decimal) system with other bases, we will quickly become aware that the system that we are so used to, when slightly changed, will challenge our notions about numbers and what symbols for those numbers actually mean.
            </p>
          </article>
          <article className="section-article">
            <h5 className="section-heading">The Development and Use of Different Number Bases</h5>
            <p className="section-paragraph">
              Introduction and Basics
              During the previous discussions, we have been referring to positional base systems. In this section of the chapter, we will explore exactly what a base system is and what it means if a system is “positional.” We will do so by first looking at our own familiar, base-ten system and then deepen our exploration by looking at other possible base systems. In the next part of this section, we will journey back to Mayan civilization and look at their unique base system, which is based on the number 20 rather than the number 10.
              A base system is a structure within which we count. The easiest way to describe a base system is to think about our own base-ten system. The base-ten system, which we call the “decimal” system, requires a total of ten different symbols/digits to write any number. They are, of course, 0, 1, 2, . . . , 9.<br />
              The decimal system is also an example of a positional base system, which simply means that the position of a digit gives its place value. Not all civilizations had a positional system even though they did have a base with which they worked.
              In our base-ten system, a number like 5,783,216 has meaning to us because we are familiar with the system and its places. As we know, there are six ones, since there is a 6 in the ones place. Likewise, there are seven “hundred thousands,” since the 7 resides in that place. Each digit has a value that is explicitly determined by its position within the number. We make a distinction between digit, which is just a symbol such as 5, and a number, which is made up of one or more digits. We can take this number and assign each of its digits a value. One way to do this is with a table, which follows:
            </p>
            <table className="section-table">
              <tr className="section-table-row">
                <td>5,000,000</td>
                <td>= 5 × 1,000,000</td>
                <td>= 5 × 10<sup>6</sup></td>
                <td>Five million</td>
              </tr>
              <tr className="section-table-row">
                <td>+700,000</td>
                <td>= 7 × 100,000</td>
                <td>= 7 × 10<sup>5</sup></td>
                <td>Seven hundred thousand</td>
              </tr>
              <tr className="section-table-row">
                <td>+80,000</td>
                <td>= 8 × 10,000</td>
                <td>= 8 × 10<sup>4</sup></td>
                <td>Eighty thousand</td>
              </tr>
              <tr className="section-table-row">
                <td>+3,000</td>
                <td>= 3 × 1,000</td>
                <td>= 3 × 10<sup>3</sup></td>
                <td>Three thousand</td>
              </tr>
              <tr className="section-table-row">
                <td>+200</td>
                <td>= 2 × 100</td>
                <td>= 2 × 10<sup>2</sup></td>
                <td>Two hundred</td>
              </tr>
              <tr className="section-table-row">
                <td>+10</td>
                <td>= 1 × 10</td>
                <td>= 1 × 10<sup>1</sup></td>
                <td>Ten</td>
              </tr>
              <tr className="section-table-row">
                <td>+6</td>
                <td>= 6 × 1</td>
                <td>= 6 × 1</td>
                <td>Six</td>
              </tr>
            </table>
            <div className="section-table-total">
              <span>5,783,216</span>
              <span>Five million, seven hundred eighty-three thousand, two hundred sixteen</span>
            </div>
            <p className="section-paragraph">
              From the third column in the table we can see that each place is simply a multiple of ten. Of course, this makes sense given that our base is ten. The digits that are multiplying each place simply tell us how many of that place we have. We are restricted to having at most 9 in any one place before we have to “carry” over to the next place. We cannot, for example, have 11 in the hundreds place. Instead, we would carry 1 to the thousands place and retain 1 in the hundreds place. This comes as no surprise to us since we readily see that 11 hundreds is the same as one thousand, one hundred. Carrying is a pretty typical occurrence in a base system.<br />
              However, base-ten is not the only option we have. Practically any positive integer greater than or equal to 2 can be used as a base for a number system. Such systems can work just like the decimal system except the number of symbols will be different and each position will depend on the base itself.
            </p>
            <p className="section-paragraph">
              Other Bases<br />
              For example, let’s suppose we adopt a base-five system. The only modern digits we would need for this system are 0,1,2,3 and 4. What are the place values in such a system? To answer that, we start with the ones place, as most base systems do. However, if we were to count in this system, we could only get to four (4) before we had to jump up to the next place. Our base is 5, after all! What is that next place that we would jump to? It would not be tens, since we are no longer in base-ten. We’re in a different numerical world. As the base-ten system progresses from 100 to 101, so the base-five system moves from 50 to 51 = 5. Thus, we move from the ones to the fives.
              After the fives, we would move to the 52 place, or the twenty fives. Note that in base-ten, we would have gone from the tens to the hundreds, which is, of course, 102.<br />
              Let’s take an example and build a table. Consider the number 30412 in base five. We will write this as 304125, where the subscript 5 is not part of the number but indicates the base we’re using. First off, note that this is NOT the number “thirty thousand, four hundred twelve.” We must be careful not to impose the base-ten system on this number. Here’s what our table might look like. We will use it to convert this number to our more familiar base-ten system.
            </p>
          </article>
          <table className="section-table">
            <tr className="section-table-row">
              <td>Base 5</td>
              <td>This column coverts to base-ten</td>
              <td>In Base-10</td>
            </tr>
            <tr className="section-table-row">
              <td>3 x 5<sup>4</sup></td>
              <td>= 3 × 625</td>
              <td>1875</td>
            </tr>
            <tr className="section-table-row">
              <td>0 x 5<sup>3</sup></td>
              <td>= 0 × 125</td>
              <td>= 0</td>
            </tr>
            <tr className="section-table-row">
              <td>4 x 5<sup>2</sup></td>
              <td>= 4 × 25</td>
              <td>= 100</td>
            </tr>
            <tr className="section-table-row">
              <td>1 x 5<sup>1</sup></td>
              <td>= 1 x 5</td>
              <td>= 5</td>
            </tr>
            <tr className="section-table-row">
              <td>2 x 5<sup>0</sup></td>
              <td>= 2 × 1</td>
              <td>= 2</td>
            </tr>
          </table>
          <div className="section-table-total">
            <span>Total</span>
            <span>1982</span>
          </div>
          <p className="section-paragraph">
            As you can see, the number 304125 is equivalent to 1,982 in base-ten. We will say 304125 = 198210. All of this may seem strange to you, but that’s only because you are so used to the only system that you’ve ever seen.
          </p>
          <p className="section-paragraph">
            Converting from Base 10 to Other Bases<br />
            Converting from an unfamiliar base to the familiar decimal system is not that difficult once you get the hang of it. It’s only a matter of identifying each place and then multiplying each digit by the appropriate power. However, going the other direction can be a little trickier. Suppose you have a base-ten number and you want to convert to base-five. Let’s start with some simple examples before we get to a more complicated one.
          </p>
          <div className="example-wrap">
            <div className="example-head">EXAMPLE</div>
            <div className="example-body">
              <p className="">
                Convert twelve to a base-five number.<br />
                <br />
                Solution<br />
                We can probably easily see that we can rewrite this number as follows:<br />
                <br />
                12 = (2 × 5) + (2 × 1)<br />
                <br />
                Hence, we have two fives and 2 ones. Hence, in base-five we would write twelve as 225. Thus, 1210 =225.
              </p>
            </div>
          </div>
          <div className="example-wrap">
            <div className="example-body">
              <p className="">
                TRY IT NOW<br />
                <br />
                Convert 65710 to a base 4 number.
              </p>
            </div>
          </div>
          <div className="example-wrap">
            <div className="example-body">
              <p className="">
                TRY IT NOW<br />
                <br />
                Convert 837710 to a base 8 number.
              </p>
            </div>
          </div>
          <article className="section-article">
            <h5 className="section-heading">Conclusion</h5>
            <p className="section-paragraph">
              In this reading, we have briefly sketched the development of numbers and our counting system, with the emphasis on the “brief” part. There are numerous sources of information and research that fill many volumes of books on this topic. Unfortunately, we cannot begin to come close to covering all of the information that is out there.<br />
              We have only scratched the surface of the wealth of research and information that exists on the development of numbers and counting throughout human history. What is important to note is that the system that we use every day is a product of thousands of years of progress and development. It represents contributions by many civilizations and cultures. It does not come down to us from the sky, a gift from the gods. It is not the creation of a textbook publisher. It is indeed as human as we are, as is the rest of mathematics. Behind every symbol, formula and rule there is a human face to be found, or at least sought.<br />
              Furthermore, we hope that you now have a basic appreciation for just how interesting and diverse number systems can get. Also, we’re pretty sure that you have also begun to recognize that we take our own number system for granted so much that when we try to adapt to other systems or bases, we find ourselves truly having to concentrate and think about what is going on.

            </p>
            <p>Reference: <a href="https://courses.lumenlearning.com/atd-hostos-introcollegemath/chapter/numeration/">https://courses.lumenlearning.com/atd-hostos-introcollegemath/chapter/numeration/</a></p>
          </article>
        </div>
      </div>
    </React.Fragment>
  )
}



export default BiologyArticle