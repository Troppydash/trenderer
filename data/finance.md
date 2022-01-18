# Finance - Khan Academy

## Interest and debt

### Interest
The principle is the original money borrowed. The interest rate is the excess money paid back,
often as a percentage, for the borrowing of the principle for a set amount of time, often a year.

The principle is denoted as $p$, the interest rate as $r$, the number of years is $t$.

#### Simple interest
Simple interest means that interest is paid always as a percentage of the principle per unit time.
The value $V$ formula for simple interest is:
\[
    V = p (1+tr).
\]

If the annual simple interest rate is $r$, the monthly simple interest rate $m$ is:
\[
    m = \frac{r}{12}.
\]

#### Compound interest
Compound interest is the accumulation of interest on a principle over time.
The value $V$ formula for compound interest is:
\[
    V = p (1+r)^t.
\]

If the annual compound interest rate is $r$, then monthly compound interest rate $m$ is:
\[
    m = (1 + r) ^ {\frac{1}{12}} - 1.
\]

#### Doubling time
To find the shortest years needed for the principle to double, it is:
\[
    t = \log_{1+r} 2,
\]
and for the principle to scale $c$, it is:
\[
    t = \log_{1+r} c.
\]

The **Rule of 72** estimation states the number of years
for a principle to double at a compounding rate of $r$ per year is approximately:
\[
    t \approx \frac{72}{100r}.
\]

#### Effective, Nominal compound interest
The effective rate of interest $r$ is the real rate of interest considering
the interest on the compounding and inflation; the nominal rate of interest $i$
does not consider the interest of compounding nor inflation.

The value of savings of annual nominal rate of interest given $n$ payment periods is:
\[
    V = p (1 + \frac{i}{n})^{nt}
\]

The conversion between the effective rate of interest and the nominal are:
\[
\begin{align*}
    r &= (1+\frac{i}{n})^n - 1\\
    i &= n (1 + (1 + r)^{\frac{1}{n}})
\end{align*}
\]

#### APR - Annual Percentage Rate
For a stated APR of $r$ and the daily periodic rate $r_d$, their relationship is:
\[
    r = 365 r_d.
\]

If the interest rate is simple, the rate of $r$ would be the interest rate.

If the interest rate compounds, the effective APR would be:
\[
    E = (1 + r_d) ^ {365} - 1,
\]
which is higher than the stated APR rate.

#### Continuous compound interest
The value after a year of loan of nominal interest rate of $100\%$ will approach
$e$ as the number of payments approach infinity:
\[
    V = \lim_{n \to \infty} (1 + \frac{1}{n})^n = e
\]

To generalize, the value of the continuous compounded interest is:
\[
    V = pe^{rt}
\]

### Credit Card institutions
The processors are firms that maintain networks that connect other banks together.
Bank often connect to a processor and issue credit cards under the processors.

When a transaction is taken, the buyer's credit card bank is called the issuer. The merchant's card
acceptance bank is called the acquirer. The first step is an Authorization confirming for the processor
from the issuer bank that there are enough credit for the transaction. The merchant will have to pay
a discount rate to the acquirer as payment for the infrastructure, which the acquirer will have to share
with the processor and issuer bank. The issuer bank fee is called the interchange fee.

#### Payday loans - Cash advances
Payday loans are a form of unsecured short-term loans with typically very high interest rates.
The loaner will often enquiry the borrower's pay-stub (income), payday (time of payment), and
bank account balance history.

The lender will state an interest rate, and receive a forward cheque from the borrower on the payday.
The borrower can either pay the total amount in cash back on the date, received the unchecked cheque, or
the lender would check the cheque.

At an interest rate of 25% per 2 week, the simple APR is:
\[
    0.25^{52/2} \approx 650\%,
\]
furthermore, for a compounded interest, the effective APR is:
\[
    (1 + 0.25)^{52/2} - 1 \approx 330000\%.
\]

### Present value
The time when money is gained is important. The present value of money
is the money accounted for the time when it can be received; the future value
of some money is the amount accounted for the interest rate. For example, the
present value of $121$ dollars is $100$ at a $10\%$ risk-free interest rate,
is $100$ dollars, while the future value of $100$ dollars in 2 years is $121$
dollars.

The present value $PV$ of $V$ amount of money in $t$ years with compounding
interest is:
\[
    PV = V / (1+r)^t.
\]

The process of calculating the present value through discounting the future
values are called the calculation of discounted cash flows.


### Bankruptcy
The person that borrowed money is called the debtor, the person that lend money is called the creditor.

#### US Bankruptcy
Chapter 7 is a straight bankruptcy, using the current assets to pay back the
creditors, all debt are removed except for a few by law. Stays on credit
report for 10 years.

Chapter 13 is a reorganization bankruptcy, a plan is devised that must be 
followed
to pay the creditors in the next 3-5 years, but will be cancelled if a 
single payment is missed. Stays on credit report for 7 years.


## Housing


### Home equity and personal balance sheets
Assets are resources controlled and own by you that can be used in the future
to benefit you; Liabilities are future sacrifices of benefits that you are
obliged to let go as a result of past transactions. Equity is the total 
assets minus the total liabilities, and represents the worth after all debt 
and all assets are accounted for. 

In a balance sheet, assets are written on the left and liabilities are written
on the right. A balance sheet is used to indicate economic position at a 
certain time. The equity is also written.

An IOU, abbr. for I owe you, is an informal document acknowledging debt. When
borrowing, the borrower receives funds, while the lender received security on
the property that is purchased as well as the interest on the property.

Financial securities are fungible instruments that hold monetary value. It 
may represent ownership of some things. There are equity securities providing
ownership rights to holders, and debt securities representing loan repayments.

Collateral are assets that are used to secure a loan. Foreclosing is the act
of the lender recovering the loan from the borrower by the sale of the asset
used as the collateral. Marking the market means to revaluate the value of
an asset. Liquidation is the process when assets are sold off and distributed
to the investors and paying off the liabilities.

Leveraging is any technique involving using debt to purchase new assets. 
Mortgages are types of leverages.

Home equity loans are ways to turn assets into cash. If you own a certain
percentage of equity against your house, the lender may allow you to take
home equity loans where they receive securities on the loan with the house
as collateral. This allows one to turn equity on a property into cash. This 
can allow one to take money out of the rising property values.

### Renting, buying a home
When you rent a house, your expenses are the rent payment on the house. When
you buy a house with a mortgage, your expenses are the interest on the
mortgage, property upkeep, and tax on the property. 

Often, payment on mortgages are mostly interest at the start of the plan, and
become mostly savings at the end of the plan.

#### Expenses
Renting allows the investments with the down payment, as well as providing
flexibility, and the avoidance of housing bubbles; Buying have the benefit
of forced savings, stability of assets, lack of worry about renting costs, 
and freedom to improve the property.

The simplified financial expenses for renting and buying of a house is listed below:

| Expenses   	   | Renting        	 | Buying                                                                                      	 |
|----------------|------------------|-----------------------------------------------------------------------------------------------|
| - Interest   	 | Rent           	 | Mortgage                                                                                    	 |
| + Investment 	 | Down payment   	 | House appreciation                                                                          	 |
| - Tax        	 | Investment tax 	 | Property tax,<br>Liquidity tax,<br>Tax deduction on mortgage,<br>Tax deduction on prop tax, 	 |

### Mortgage loans
Mortgages for a house is the security of the mortgage loan. The bank will
lend the money to the buyer of the house, which pays full price for the house,
than receives a mortgage and assigns the right to the house to the bank as a
piece of security as well as the interest on the loan.

At the start of the mortgage, most payments are towards the interest on the
loan; this decreases over the span of the payments. The interest part of the
mortgage payment is usually tax deducible, meaning you can state a lower 
income and thus pay lower taxes. Tax credit are actual amounts that are
deducted from the tax payment.

#### Types of mortgage loans
30/15 year fixed mortgages are a loan that is paid off in the x amount of 
years, where all payments are the same in amount - amortization is the total time needed to pay of a mortgage; An Adjustable Rate mortgage 
are mortgages that have a certain time period where the rate is fixed, but is 
subject to change every year after said period. The action of refinancing is 
the process of revising and replacing the terms on a loan with the hope to 
lower the interest rate. Refinancing can be achieved either with negotiation 
with the original lender, or to borrow from a new lender. 

The index chosen to revaluate the new interest rates on an ARM depends on the
lender. In US, it is the treasury securities. The interest rate on longer 
term plans are generally higher than short term plans. In an ARM, the 
borrower takes the risk of interest rates; on a fixed rate mortgage, the 
lender takes the risk of interest rates.

Hybrid ARM are mortgage starting with fixed rate, then becoming adjustable rates. Balloon payments start with fixed rate, but has a shorter term than
its amortization, so the borrower must pay the rest of principle or take out
another loan to do so.

#### Short sale
If you cannot make your mortgage payments when having a mortgage, the options
are to either undergo foreclosure, where the lending bank takes the house and
perhaps sell it, but decreases your credit ratings dramatically; or you can 
sell the house to pay the rest of the mortgage. If the value of the house
decreased over the loan amount, you can negotiate with the lender to forgive
the remaining, hopefully without a report to credit.

Taking a loan does not need to be taxed, and the interest on the payment
of the loan can sometimes be used as tax deduction on income; The interest
payment on lending a loan is taxed, but the payment of the principle is not 
taxed. The forgiving of loans is taxed, or a loophole can be exploited

#### Calculate the mortgage payment
With a loan of $L$, a monthly payment of $P$, and a monthly
interest of $i$, the remaining payment at month $t$ is:
\[
    R = (1+i)^t (L + P (1 - \frac{1+i}{i})) + \frac{P}{i}.
\]

Given an amortization time of $t$ months, the monthly payment is:
\[
    P = \frac{L}{((1+i) - (1+i)^{-t}) (\frac{1}{i}) - 1}
\]

### Home buying process
The title is a form of ownership of an asset, the legal documents for a title 
transfer are called deeds. A lien is the right to possess a property 
belonging to another person until some debt is cleaned.

A title insurance insure against an unmarked lien on the property after a 
title search.

To make an offer, one needs to make an offer contract with the relevant 
information on it. It must have the offer amount, a deposit usually as a
percentage of the offer, one that is in the form of a cheque that is 
checked if the offer goes through, and returned otherwise. It may also
contain a list of contingencies that must be performed or succeed for the
contract to pass. A closing date of the contract is also placed.

The escrow agent is a third party that conduct the transaction. All parties
will put their items into an escrow account, which will distribute its items
on the closing date. Escrow agents are using in the case of a property 
transaction with the property seller, and can also be used within a mortgage payments for 
insurances and property taxes with the lender.
