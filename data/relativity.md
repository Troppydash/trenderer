# Relativity

## General Relativity

### Equations

\[

\begin{align*}

v^\alpha &= \frac{d}{d\tau} x^\alpha\\

\vec{v} &= v^\alpha \vec{e}_\alpha \\

||\vec{v}|| &= c \\

\frac{d}{d\tau} \vec{v} &= \vec{0} \\

\frac{d}{dx^\beta} \vec{e}_\alpha &= \Gamma^\gamma{}_{\alpha\beta} \vec{e}_\gamma \\

\frac{d}{d\tau} v^\alpha &= -\Gamma^\alpha{}_{\mu\nu} v^\mu v^\nu \\

g^{\mu\nu} &= \left(g^{-1}\right)_{\mu\nu} \\

(ds)^2 &= g_{\mu\nu} dx^\mu dx^\nu \\

||\vec{v}||^2 = c^2 &= g_{\mu\nu} v^\mu v^\nu \\

\Gamma^\gamma{}_{\alpha\beta} &= \begin{cases}
        \frac{1}{2 g_{\gamma\gamma}} \left(  \frac{dg_{\gamma\alpha}}{dx^\beta} + \frac{dg_{\gamma\beta}}{dx^\alpha}
                                            - \frac{dg_{\alpha\beta}}{dx^\gamma} \right) & \text{orthogonal basis} \\
        \frac{g^{\gamma\sigma}}{2} \left( \frac{dg_{\sigma\alpha}}{dx^\beta} + \frac{dg_{\sigma\beta}}{dx^\alpha} 
                                          - \frac{dg_{\alpha\beta}}{dx^\sigma} \right) & \text{otherwise}\\
    \end{cases} \\

R^\alpha{}_{\beta\mu\nu} &= \frac{d\Gamma^\alpha{}_{\beta\nu}}{dx^\mu} + \Gamma^\lambda{}_{\beta\nu} \Gamma^\alpha{}_{\lambda\mu}  - \frac{d\Gamma^\alpha{}_{\beta\mu}}{dx^\nu} - \Gamma^\lambda{}_{\beta\mu} \Gamma^\alpha{}_{\lambda\nu} \\

R_{\mu\nu} &= R^\lambda{}_{\mu\lambda\nu}\\

R &= g^{\mu\nu} R_{\mu\nu}\\

\end{align*}
\]

## World Lines

Proper time $\tau$ is the time experienced by the object as it moves in spacetime.

A coordinate system contains an origin and basis vectors. It is arbitrary.

Proper time is different to the time axis ($t$).

Objects in spacetime always have a constant velocity of norm $c$.

The object's position, time in spacetime is a function of proper time

Decomposing the velocity vector $\vec{v}$ into a basis with basis vectors $\vec{e}_i$, we get:
\[
    \vec{v} = v^i \vec{e}_i.
\]

and the norm restriction is:
\[
    ||\vec{v}|| = c.
\]

## Geodesic
A geodesic path is one where the velocity vector is constant (in direction and norm) for all proper times.

It implies that:
\[
    \frac{d}{d\tau} \vec{v} = \vec{0}.
\]

Applying the chain rule on the expanded velocity vector gives the Geodesic equation:
\[
\frac{d}{d\tau} v^\alpha = -\Gamma^\alpha{}_{\mu\nu} v^\mu v^\nu
\]
where the Christoffel symbols ($\Gamma^\gamma{}_{\alpha\beta}$) represent the $\gamma$ component of the rate of change of the $\alpha$ basis vector against a change along the $\beta$ axis. Symbolically, it is:
\[
    \Gamma^\gamma{}_{\alpha\beta} \vec{e}_\gamma = \frac{d}{dx^\beta} \vec{e}_\alpha.
\]

The Christoffel symbols are features of spacetime.

### Euclidean Space
In euclidean space, all Christoffel symbols are zero, hence
\[
    \frac{d}{d\tau} \vec{v} = \vec{0}
\]

## Metric Tensor

The metric tensor is a property of spacetime. It is used to find the distances and angles between points in a generalized coordinate system.

For (infinitesimal) small distances, the path length $ds$ can always be computed as (2D for example):
\[
\begin{align*}
    (ds)^2 &= k_0 dx^0 dx^0 \\
           &+ k_1 dx^0 dx^1 \\
           &+ k_2 dx^1 dx^0 \\
           &+ k_3 dx^1 dx^1 \\
\end{align*}
\]
for real numbers $k_i$ and displacement basis vectors $x^i$.

Let $g$ be the metric tensor, where
\[
    (ds)^2 = g_{\mu\nu}dx^\mu dx^\nu
\]

In the 2D example, the metric tensor is
\[
    g = \begin{bmatrix}
        k_0 & k_1 \\
        k_2 & k_3
    \end{bmatrix}
\]

By taking the time differential on both sides, we get:
\[
    ||\vec{v}||^2 = g_{\mu\nu} v^\mu v^\nu = c^2.
\]

A metric tensor completely defines the Christoffel symbols by the relationship:
\[
    \Gamma^\gamma{}_{\alpha\beta} = \frac{g^{\gamma\sigma}}{2} \left( \frac{dg_{\sigma\alpha}}{dx^\beta} + \frac{dg_{\sigma\beta}}{dx^\alpha} - \frac{dg_{\alpha\beta}}{dx^\sigma} \right)
\]

With an orthogonal basis, the equation reduces to
\[
    \Gamma^\gamma{}_{\alpha\beta} = \frac{1}{2 g_{\gamma\gamma}} \left(  \frac{dg_{\gamma\alpha}}{dx^\beta} + \frac{dg_{\gamma\beta}}{dx^\alpha} - \frac{dg_{\alpha\beta}}{dx^\gamma} \right)
\]

To find the distance along a path $L$, simply integrate:
\[
\begin{align*}
    S &= \int_L ds\\
      &= \int_L \sqrt{g_{\mu\nu}dx^\mu dx^\nu}
\end{align*}
\]

### Sphere
For a sphere of radius $R$, the metric tensor is:
\[
    g = \begin{bmatrix}
        R^2 & 0 \\
        0 & R^2 \cos^2\theta
    \end{bmatrix}
\]

with basis vectors: ($x^0 = \theta$) latitude, ($x^1 = \phi$) longitude, in that order.

Here we solve for the geodesic equation. Let the range for the basis vectors to be:
\[
\begin{align*}
    \text{ran}(\theta) &= \left[-\frac{\pi}{2}, \frac{\pi}{2} \right] \\
    \text{ran}(\phi) &= \left[-\pi, \pi \right] \\
\end{align*}
\]

Now consider the Christoffel symbols, where:
\[
\begin{align*}
    \Gamma^1{}_{01} &= -\tan\theta\\
    \Gamma^1{}_{10} &= -\tan\theta\\
    \Gamma^0{}_{00} &= \sin\theta\cos\theta
\end{align*}
\]
and everything else is zero.

The final geodesic equation is therefore:
\[
    \frac{d\vec{v}}{d\tau} = \begin{bmatrix} - (\phi')^2 \sin\theta\cos\theta \\ 2 \,\theta' \phi' \tan \theta \end{bmatrix}
\]

Notice that the conversion from latitude, longitude coordinates to cartesian coordinates is:
\[
    p(r, \theta, \phi) = \begin{bmatrix}
        r \cos\theta\cos\phi \\
        r \cos\theta\sin\phi \\
        r \sin\theta
    \end{bmatrix}
\]


### Spacetime
For a simplified spacetime, the metric tensor is:
\[
    g = \begin{bmatrix}
            c^2 & 0 \\
            0 & -1
        \end{bmatrix}
\]
with basis vectors: ($x^0 = t$) time, ($x^1 = x$) displacement, in that order.

This Minkowski metric is the metric used for special relativity. Here we derive the time dilation relations.

Consider the identity
\[
    (ds)^2 = g_{\mu\nu} dx^\mu dx^\nu
\]

Assuming a constant velocity $\vec{v}$ in spacetime for it is a geodesic path (the Minkowski metric is flat and all Christoffel symbols are zero), this implies that the real velocity $v=\frac{dx}{dt}$ is constant.

Let $\tau$ be the internal time (rest time $t_0$) of the moving object, and let $t$ be the perceived time by an observer (time $t$). It can be derived that:
\[
\begin{align*}
    ds &= c d\tau \\
    dx &= v dt.
\end{align*}
\]

Therefore, by substitution of $ds$ and expanding the metric tensor $g_{\mu\nu}$:
\[
\begin{align*}
(c d\tau)^2 &= c^2 {dt}^2 - {dx}^2 \\
  {d\tau}^2 &= {dt}^2 - \frac{{dx}^2}{c^2} \\
            &= {dt}^2 - {dt}^2 \frac{v^2}{c^2} \\
            &= {dt}^2 \left( 1 - \frac{v^2}{c^2} \right) \\
      d\tau &= dt \sqrt{1 - \frac{v^2}{c^2}}\\
         dt &= \frac{d\tau}{\sqrt{1 - \frac{v^2}{c^2}}}
\end{align*}
\]

Approximating differentials to differences for the constant velocity, where $dt \Rightarrow \Delta t = t$, we derive:
\[
    t = \frac{t_0}{\sqrt{1-\frac{v^2}{c^2}}}.
\]

The length contraction relations can be derived by considering the rest length from the observer's perspective to be $L_0 = v t$, and the contracted length from the moving object's perspective to be $L = v t_0$, deriving:
\[
    L = L_0 \sqrt{1-\frac{v^2}{c^2}}
\]


## Curvature

Curvature is a property of the space we define our coordinates and basis vectors in.

Mathematically, its value is characterized at every location and is fully a property of the Christoffel symbols $\Gamma$, and thus computable soley by the metric tensor $g$.

Intuitively, the curvature at a location is the difference between transporting a basis vector along direction $\mu$, then $\nu$ against the reversed order, symbolically as:
\[
    \vec{R} = \frac{d}{dx^\mu}\frac{d}{dx^\nu} \vec{e}_\beta - \frac{d}{dx^\nu}\frac{d}{dx^\mu} \vec{e}_\beta.
\]

At locations of higher curvature, the norm of the curvature vector $||\vec{R}||$ is larger.

This can be simplified through the substitution of Christoffel symbols and multiple product rules:
\[
\begin{align*}
    \vec{R} &= \frac{d}{dx^\mu} \Gamma^\alpha{}_{\beta\nu} \vec{e}_\alpha - \frac{d}{dx^\nu} \Gamma^\alpha{}_{\beta\mu} \vec{e}_\alpha \\
        &= \frac{d\Gamma^\alpha{}_{\beta\nu}}{dx^\mu}\vec{e}_\alpha + \Gamma^\alpha{}_{\beta\nu} \frac{d\vec{e}_\alpha}{dx^\mu} - \left( \frac{d\Gamma^\alpha{}_{\beta\mu}}{dx^\nu} \vec{e}_\alpha + \Gamma^\alpha{}_{\beta\mu} \frac{d\vec{e}_\alpha}{dx^\nu}\right) \\
        &= \frac{d\Gamma^\alpha{}_{\beta\nu}}{dx^\mu}\vec{e}_\alpha + \Gamma^\alpha{}_{\beta\nu} \Gamma^\lambda{}_{\alpha\mu} \vec{e}_\lambda - \frac{d\Gamma^\alpha{}_{\beta\mu}}{dx^\nu} \vec{e}_\alpha - \Gamma^\alpha{}_{\beta\mu} \Gamma^\lambda{}_{\alpha\nu} \vec{e}_\lambda\\
        &= \frac{d\Gamma^\alpha{}_{\beta\nu}}{dx^\mu}\vec{e}_\alpha + \Gamma^\lambda{}_{\beta\nu} \Gamma^\alpha{}_{\lambda\mu} \vec{e}_\alpha - \frac{d\Gamma^\alpha{}_{\beta\mu}}{dx^\nu} \vec{e}_\alpha - \Gamma^\lambda{}_{\beta\mu} \Gamma^\alpha{}_{\lambda\nu} \vec{e}_\alpha\\
    R^\alpha{}_{\beta\mu\nu} &= \frac{d\Gamma^\alpha{}_{\beta\nu}}{dx^\mu} + \Gamma^\lambda{}_{\beta\nu} \Gamma^\alpha{}_{\lambda\mu}  - \frac{d\Gamma^\alpha{}_{\beta\mu}}{dx^\nu} - \Gamma^\lambda{}_{\beta\mu} \Gamma^\alpha{}_{\lambda\nu}
\end{align*}
\]

The set of all curvature components $R^\alpha{}_{\beta\mu\nu}$ are named the Riemann curvature tensor with four dimensions. Each tensor component contains information on the $\alpha$ component of the displacement vector between transporting the $\beta$ basis vector along the $\mu$, $\nu$ direction and vice versa.

To simplify the large Riemann tensor, the Ricci tensor $R_{\mu\nu}$ is defined to be:
\[
    R_{\mu\nu} = R^\lambda{}_{\mu\lambda\nu}
\]
It represents the summation of all Riemann tensor components with the 2nd and 4th indices of $\mu$, $\nu$, and the 1st and 3rd indices the same. Intuitively, the tensor measures how volume changes between geodesic paths along different directions at a location.

The Ricci scalar $R$ represents the average curvature along all directions, and is defined to be:
\[
    R = g^{\mu\nu} R_{\mu\nu}
\]

When $R$ is zero, the space is flat, and two parallel geodesics will not stay the same distance. When $R$ is positive, the space is positively curved, and two parallel geodesics will eventually intersect. When $R$ is negative, the space is negatively curved, and two parallel geodesics will diverge at long distances.

### Sphere
The Ricci Scalar for a sphere of radius $r$ is
\[
    R = \frac{2}{r^2}.
\]

Therefore the larger the radius, the smaller the curvature, and more parallel geodesics become at long distances.

