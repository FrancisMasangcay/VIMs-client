import React, { Component } from "react";
import { connect } from "react-redux";
import GeneralLineChart from "../components/GeneralLineChart";

const newChartData = {
  labels: [
    "Jan 01 2021",
    "Jan 08 2021",
    "Jan 15 2021",
    "Jan 22 2021",
    "Jan 29 2021",
    "Feb 05 2021",
    "Feb 12 2021",
  ],
  datasets: [
    {
      data: [15, 20, 22, 28, 14, 13, 17],
      borderWidth: 1,
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: "rgba(0, 0, 10, 0.2)",
      borderColor: "rgba(0, 0, 0, 1)",
    },
  ],
};

class Learn extends Component {
  render() {
    return (
      <>
        <div className='tutorial-section'>
          <GeneralLineChart
            title='WXZY'
            chartData={newChartData}
            fontColor='black'
          />
          <div className='security-metrics-grid'>
            <div className='security-metric'>
              <div className='label'>
                <>Previous Close:</>
              </div>
              <div className='value'>
                <div>$17.00</div>
              </div>
            </div>
            <div className='security-metric'>
              <div className='label'>
                <a href='/dictionary/M/Market Capitalization'>Market Cap:</a>
              </div>
              <div className='value'>$1.5M</div>
            </div>
            <div className='security-metric'>
              <div className='label'>
                <a href='/dictionary/V/Volume'>Volume</a>
              </div>
              <div className='value'>501</div>
            </div>
            <div className='security-metric'>
              <div className='label'>
                <a href='/dictionary/D/Dividend Yield'>Dividend Yield</a>
              </div>
              <div className='value'>$0.55</div>
            </div>
            {/* newRow */}
            <div className='security-metric'>
              <div className='label'>
                <>Open</>
              </div>
              <div className='value'>$17.35</div>
            </div>
            <div className='security-metric'>
              <div className='label'>
                <a href='/dictionary/B/Beta'>Beta</a>
              </div>
              <div className='value'>1.08</div>
            </div>
            <div className='security-metric'>
              <div className='label'>
                <a href='/dictionary/P/Price to Earnings Ratio'>P/E Ratio</a>
              </div>
              <div className='value'>50.33</div>
            </div>
            <div className='security-metric'>
              <div className='label'>
                <a href='/dictionary/Numbers/52 Week high and low'>
                  52 Week high and low
                </a>
              </div>
              <div className='value'>$14-$28</div>
            </div>
          </div>
        </div>

        <div className='tutorial-section'>
          <h1>Long term v.s. Short term Strategies</h1>
          <p>
            {" "}
            Long term trading is generally when a trader holds onto his/her
            shares for one year or longer, while on the other hand short term
            traders will sell shares on a far quicker turn around often within
            days or weeks of buying a certain stock. Whether you are a long or
            short term trader largely depends on your trading style and how much
            risk you can stomach as both styles have their advantages and
            disadvantages.
          </p>
          <div className='two-columns'>
            <div>
              <h3>Pros of Long Term Trading</h3>
              <p>
                <ul>
                  <li> Lower stress and risk </li>
                  <li> Cost efficient strategy </li>
                  <li> Compounding </li>
                  <li> Low barrier to entry </li>
                </ul>
              </p>
            </div>
            <div>
              <h3>Cons of Long Term Trading</h3>
              <p>
                <ul>
                  <li> Time requirements </li>
                  <li> Low liquidty assets </li>
                  <li> Expertise and sector review </li>
                  <li> Lower short term gains </li>
                </ul>
              </p>
            </div>
          </div>
          <div className='two-columns'>
            <div>
              <h3>Pros of Short Term Trading</h3>
              <p>
                <ul>
                  <li>High liquidty</li>
                  <li>Unaffected by after hours fluctuations</li>
                  <li>Higher potential rewards</li>
                  <li>Faster capital gains/losses</li>
                </ul>
              </p>
            </div>
            <div>
              <h3>Cons of Short Term Trading</h3>
              <p>
                <ul>
                  <li> Higher risks </li>
                  <li> Fees and taxes </li>
                  <li> $25,000 minimum in cash to invest for day trading </li>
                  <li> High stress </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className='tutorial-section'>
          <h1>Beating the Market</h1>
          <p>
            {" "}
            When traders discuss how each others invesments did in the past
            quarter, year, or even past several years, how their portfolio did
            against the market will come up in the conversation sooner or later.
            That is because the market as a whole is the bench mark where the
            performance of comapanies and investors are ranked against. The
            market is the average and in the US markets there are several
            benchmarks to compare against. The most famous of which is arguably
            the Standard and Poors 500 index otherwise known as the S&P 500.
          </p>
          <p>
            The S&P 500 is a compilation of the 500 biggest companies in
            different sectors of the US markets and is considered a good
            reflection of the economy. "Beating the Market" is when an
            investor's portfolio performs better than the S&P 500 over the
            course of a certain period. Companies are also ranked against the
            S&P and this is reflected in the stock's "Beta" value. A positive
            beta means that a stock tends to follow the direction of the
            markets. Meaning if the market price drops so does the stock's
            price. A negative beta means the stock tends to go the opposite
            direction of the market meaning when the market price drops, the
            stock tends to rise in price. Investors look to these values among
            others to help them decide on what stocks to invest in.
          </p>
          <p>
            The overall goal then of most investors and funds is to out perform
            the market. Which as most have found out, is difficult to do.
          </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  hasDoneTutorial: state.user.credentials.hasDoneTutorial,
});

export default connect(mapStateToProps)(Learn);
