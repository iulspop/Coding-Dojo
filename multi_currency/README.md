Multi-Currency Money
We'll start with the object that Ward created at WyCash, multi-currency money (refer to the Introduction). Suppose we have a report like this:

Instrument  Shares   Price    Total
IBM         1000     25       25000
GE          400      100      40000
                        Total 65000

To make a multi-currency report, we need to add currencies:

Instrument  Shares   Price      Total
IBM         1000     25 USD     25000 USD
Novartis    400      150 CHF    60000 CHF
                          Total 65000 USD


We also need to specify exchange rates:
From  To   Rate
CHF   USD  1.5

$5 + 10 CHF = $10 if rate is 2:1
$5 * 2 = $10

What behavior will we need to produce the revised report? Put another way, what set of tests, when passed, will demonstrate the presence of code we are confident will compute the report correctly?

Code that calculates total for individual instruments
Code the converts all totals to usd
Code the sums totals
Code that prints the report