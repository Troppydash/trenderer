# Differential Equations

## Second Order

### Linear homogeneous

#### Definitions
Linear 2nd order DE:
\[
A(x) \frac{d^2y}{dx^2} + B(x) \frac{dy}{dx} + C(x) y + D(x) = 0
\]

Linear homogeneous DE:
\[
A \frac{d^2y}{dx^2} + B \frac{dy}{dx} + C y = 0
\]

#### Properties
if $f$ is a solution, $c$ is a constant, $cf$ is also a solution

if $f$ and $h$ are solutions, $f+h$ is also a solution

#### Solving
let $y = e^{rx}$

then $y^\prime = re^{rx}$ and $y^{\prime\prime} = r^2e^{rx}$.

therefore
\[
A r^2e^{rx} + B re^{rx} + C e^{rx} = 0
\]

and the Characteristic Equation is
\[
Ar^2 + Br + C = 0.
\]

let $\phi , \psi$ be the roots

if two real roots
\[
y = C_1 e^{\phi x} + C_2 e^{\psi x}.
\]

if one real root
\[
y = C_1 x e^{\phi x} + C_2 e^{\psi x}
\]

if two complex roots, where $r = \lambda \pm \mu i$
\[
y = e^{\lambda x} (C_1 \cos \mu x + C_2 \sin \mu x)
\]




#### Example
solve
\[
4y^{\prime\prime} - 8y^{\prime} + 3y = 0.
\]

---

let $y = e^{rx}$

so $4r^2 - 8r + 3 = 0$, and $r=\frac{1}{2}$ or $\frac{3}{2}$.

therefore
\[
y = C_1 e^{\frac{1}{2} x} + C_2 e^{\frac{3}{2} x}
\]


### Undetermined Coefficients
#### Sources
[Khan Academy](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations#undetermined-coefficients)

[MIT 18.03](https://ocw.mit.edu/courses/mathematics/18-03sc-differential-equations-fall-2011/unit-ii-second-order-constant-coefficient-linear-equations/undetermined-coefficients/MIT18_03SCF11_s16_1text.pdf)

#### Definitions
Linear 2n order non-homogeneous DE:
\[
Ay^{\prime\prime} + By^{\prime} + C = D(x)
\]

#### Properties
if $f$ is a homogeneous solution, and $g$ is a particular solution, then $f + g$ is the general solution

#### Solving
first solve
\[
Ay^{\prime\prime} + By^{\prime} + C = 0
\]

and assign $h$ to this homogeneous solution.

then find an approximate solution $p$, base on an educated guess upon $D(x)$:

if $D = c_1e^{c_2x}$, try $p = ae^{bx}$

if $D = c_1 \sin x + c_2 \cos x$, try $p = a\sin x + b\cos x$

if $D = P_k(x)$ of polynomial degree $k$, try $p = G_k(x)$ of a polynomial with degree $k$

then substitute $p$ with undetermined coefficients $a$ and $b$ into original equation, solve for $a$ and $b$.

and the general solution is
\[
y = h + p
\]

#### Example
solve
\[
y^{\prime\prime} - 3y^\prime - 4y = 4x^2
\]

---

first find the solution $h$ for the homogeneous equation
\[
y^{\prime\prime} - 3y^\prime - 4y = 0,
\]

which is
\[
h = C_1 e^{4x} + C_2 e^{-x}.
\]

as $D = P_2(x)$, our guess for $p$ is
\[
p = Ax^2 + Bx + C
\]

substituting $p$ for $y$, we can solve for $A$, $B$, and $C$:
\[
A = -1, B = \frac{3}{2}, C = -\frac{13}{8}
\]

therefore, the general solution $y$ is
\[
y = C_1 e^{4x} + C_2 e^{-x} - x^2 + \frac{3}{2}x - \frac{13}{8}
\]

## Transforms

### Laplace Transform

#### Definition
given a function $f(t)$, the Laplace transform is
\[
\mathscr{L} \{f(t)\} (s) = \int_{0}^{\infty} e^{-st} f(x) \, dt
\]

#### Identities
| $f(t)$ | $\mathscr{L} \{f(t)\} (s) = F(s)$, given s $\gt$ 0 |
| --- | --- |
| $1$ | $\frac{1}{s}$ |
| $e^{at}$ | $\frac{1}{s-a}$ |
| $\sin(at)$ | $\frac{a}{s^2+a^2}$ |
| $\cos(at)$ | $\frac{s}{s^2+a^2}$ |
| $t^n$ | $\frac{n!}{s^{n+1}}$ |
|||
| $f^{\prime}(t)$ | $sF(s) - f(0)$ |
| $f^{(n)}(t)$ | $s^n F(s) - s^{n-1} f(0) - s^{n-2} f^\prime (0) - \cdots - s^0 f^{(n-1)}(0)$ |
| $e^{at} f(t)$ | $F(s-a)$ |
| $af(t) + bg(t)$ | $aF(s) + bG(s)$ |
|||
| $\theta(t-c) f(t-c)$ | $e^{-cs} F(s)$ |
| $\delta(t-c) f(t)$ | $e^{-cs} f(c)$ |

#### Extras
Heaviside $\theta(t)$ and Dirac $\delta(t)$ functions are:

\[
\begin{align*}
    \theta(t) &= \begin{cases}
        0 & t < 0\\
        1 & t \ge 0
    \end{cases}\\
    \delta(t) &= \begin{cases}
    0 & t \neq 0\\
    \infty & t = 0
    \end{cases}
\end{align*}
\]

note that:
\[
\begin{align*}
    \delta(t) &= \frac{d}{dt} \theta(t)\\
    \theta(t) &= \int_{-\infty}^{t} \delta(x) \, dx
\end{align*}
\]

#### Usage
to solve any differential equation of the form

\[
    g(y, y^\prime, y^{\prime\prime}, \cdots) = f(x),
\]

simply take the Laplace transform of both sides and simplify

#### Examples
solve for $y$, if

\[
    y^{\prime\prime} + 4y = \sin t - \theta(t - 2\pi) \sin(t - 2\pi)  
\]

when $y(0) = 0$, $y^\prime(0) = 0$

---

let $Y(s) = \mathscr{L}\{y(t)\}(s)$

taking the Laplace transform of both sides, resulting
\[
\begin{align*}
    (s^2 Y(s) - s y(0) - y^\prime(0))\\ + 4Y(s) &= \frac{1}{s^2+1} - (e^{-2\pi s} \frac{1}{s^2+1})\\
    Y(s) (s^2 + 4) &=  \frac{1}{s^2+1} (1-e^{-2\pi s})\\
    Y(s) &=  (1-e^{-2\pi s}) \frac{1}{(s^2+1)(s^2+4)}.
\end{align*}
\]

via partial fractional decomposition, the RHS is

\[
\begin{alignat*} {2}
    Y(s) &= && \enspace  (1-e^{-2\pi s})(\frac{1\over 3}{s^2+1} - \frac{1\over 3}{s^2+4})\\
        &= && \enspace  (\frac{1\over 3}{s^2+1} - \frac{1\over 3}{s^2+4})\\
        &&& \enspace  -e^{-2\pi s} (\frac{1\over 3}{s^2+1} - \frac{1\over 3}{s^2+4}).
\end{alignat*}
\]

solving for $y(s)$ through the inverse Laplace transform, we conclude:
\[
\begin{alignat*} {2}
    y(t) &= && \enspace  \frac{1}{3}\sin t - \frac{1}{6}\sin 2t\\
         &  && \enspace  - \theta(t-2\pi)(\frac{1}{3}\sin(t-2\pi) - \frac{1}{6}\sin(2(t-2\pi)))\\
        &= && \enspace  (1-\theta(t-2\pi))(\frac{1}{3}\sin t - \frac{1}{6}\sin 2t).
\end{alignat*}
\]
