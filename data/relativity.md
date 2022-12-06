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
    \end{cases}

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

## Curvature
