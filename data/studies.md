# Mathematics

## 16/12/2021 Image Compression (Fourier Transforms)

#### Abstract
The discrete fourier series can be used to achieve lossy image compression, albeit
slow and inefficient by itself. One can interpret an image as three 2D arrays of
pixel intensities - a format that encapsulates this idea is the P3 PPM image format.
For natural images have relatively smooth transitions of color values between nearby
pixels, the forward discrete fourier transform is applied upon each color array and for
compression, N pairing frequency samples are taken from the frequency domain - the 
amount is variable. A modification of the inverse fourier transform is used during 
decompression. The result is a slow, but powerful/extendable image compression algorithm.

#### Color Strip

First consider the one dimension problem of reducing the information needed for a function $f(x)$
of domain $[0, M-1]$, this can be thought of as compressing a greyscale color strip of width $M$.

A forward fourier transform can convert the signal $f(x)$ to its frequency domain $F(u)$, as below:
\[
    F(u) = \frac{1}{M} \sum_{x=0}^{M-1} f(x) \exp(-i 2\pi (\frac{xu}{M})).
\]

Consider selecting $N_u$ pairs of positive negative integer values from $F$, for example when ($N_u$ = 2):
\[
    S = \{F(-2), F(-1), F(0), F(1), F(2)\}.
\]
The frequency function is more approximated by the set $S$ as $N_u$ increases, thus $N_u$ is the quality of the algorithm. 

The set of frequency values $S$ are stored as part of the compression, achieving reduced
data size.

The inverse fourier transform can convert the frequencies back to the signal, achieving decompression, shown below:
\[
    f(x) = \sum_{u=-N_u}^{N_u} F(u) \exp(i 2\pi (\frac{xu}{N})).
\]

The larger the integer $N_u$ is, the larger the compressed file size, and the "better" the quality of the decompression image.

#### Color Image
Consider reducing the information needed for a function $f(x, y)$ of domain $x \in [0, M-1], y \in [0, N-1]$. This
is equivalent to compressing a greyscale color image of width $M$ and height $N$.

It is only necessary to extend the forward and inverse fourier transforms to the second dimension. The 2D
forward fourier transform
is:
\[
    F(u, v) = \frac{1}{MN} \sum_{0}^{M-1} \sum_{0}^{N-1} f(x, y) \exp(-i 2\pi (\frac{xu}{M} + \frac{yv}{N})).
\]

As in the color strip case, we will store a sample of $N_u$ pairs of positive negative integers for all
$N_v$ pairs of positive negative integers. For example, when ($N_u = 2$, $N_v = 2$):

\[
\begin{align*}
    S = \{ &\{ F(-2, -2), F(-1, -2), F(0, -2), F(1, -2), F(2, -2) \},\\
            &\{ F(-2, -1), F(-1, -1), F(0, -1), F(1, -1), F(2, -1) \},\\
            &\{ F(-2,  0), F(-1,  0), F(0,  0), F(1,  0), F(2,  0) \},\\
            &\{ F(-2,  1), F(-1,  1), F(0,  1), F(1,  1), F(2,  1) \},\\
            &\{ F(-2,  2), F(-1,  2), F(0,  2), F(1,  2), F(2,  2) \},\\
            &\{ F(-2,  3), F(-1,  3), F(0,  3), F(1,  3), F(2,  3) \},    \}\\
\end{align*}
\]

The higher the integers $N_u$ and $N_v$ are, the most accurate the frequency function $F(u, v)$ is approximated.

To achieve decompression, the inverse fourier transform is performed on the set $S$:
\[
    f(x, y) = \sum_{u=N_u}^{N_u} \sum_{v=-N_v}^{N_v} F(u, v) \exp(i 2\pi (\frac{xu}{M} + \frac{yv}{N})).
\]

To extend this notion to colored images, simply perform the above algorithms for each color array.

#### Optimization

The forward fourier transform can be simplified and vectorized. For the monotonic image "pixels" represented as a 2D array,
for the 2D meshgrid array $X$ and $Y$, the complex frequency output at value $(u, v)$ is:
\[
    F(u, v) = \frac{1}{MN} \sum \text{pixels} \times \exp(-j 2\pi (\frac{Xu}{M}+\frac{Yv}{N})).
\]

The inverse fourier transform of the complex 2D array "reals" and "imags" at value $(x, y)$, with the 2D meshgrid of $U$ and $V$
spanning $[-N_u, Nu]$ and $[-Nv, Nv]$ is:
\[
\begin{align*}
    f(x, y) = \sum \,&\text{reals} \times \cos(2\pi (\frac{Ux}{M} + \frac{Vy}{N})) \\
                - &\text{imags} \times \sin(2\pi (\frac{Ux}{M} + \frac{Vy}{N}))
\end{align*}

\]

## 29/01/2022 Lagrangian Mechanics
The process of Lagrangian Mechanics provides an alternative pathway to finding the differential equations governing the motion of a rigid-body.

For a system of $n$ degrees of freedom, each with a parameter of time $t$, represented by the set $S$:
\[
    S = \{ q_0, q_1, \ldots, q_{n-1} \},
\]
construct the multivariable function $K$ mapping from the set $S$ to the sum of the kinetic energies of each degree of freedom $q_i$, and construct the multivariable function $P$ similar to $K$ mapping from the set $S$ to the sum of the potential energies of each degree of freedom.

Then construct the lagrangian $L$ of the same domain and random as $K$ and $P$ such that:
\[
    L = K - P.
\]

For each degree of freedom $q_i$ of the function $L$, construct the Euler-Lagrange equation:
\[
    \frac{\partial L}{\partial q_i} - \frac{d}{dt} \frac{\partial L}{\partial \dot q_i} = 0.
\]

What is remained are $n$ systems of differential equations, which may be solved or left to simulation.

#### Example
Consider a pendulum of a steel ball of mass $m$ connected to a ceiling with an inflexible wire of length $\ell$, where the position of the ball is defined uniquely by the angle it makes with the normal resting position of the pendulum, represented by the function $\theta(t)$.

This system consists of one degree of freedom, the function $\theta$. The kinetic energy $K$ of the pendulum is represented as (note that $s$ is the arc length from the normal and that $s=\theta \ell$):
\[
    K = \frac{1}{2} m v^2 = \frac{1}{2} m \dot s^2 = \frac{1}{2} m \ell^2 \dot\theta^2.
\]

Additionally, the potential energy $P$ of the pendulum is:
\[
    P = -mgy = -mgl \cos \theta.
\]

Therefore, the lagrangian $L$ can be defined as:
\[
    L = K - P = \frac{1}{2} m \ell^2 \dot\theta^2 - (-)mg \ell\cos \theta.
\]

For there is only one degree of freedom, the lagrangian can be put through the Euler-Lagrange equation:
\[
\begin{align*}
    \frac{\partial L}{\partial \theta} &= \frac{d}{dt} \frac{\partial L}{\partial \dot \theta}\\
    \frac{\partial L}{\partial \theta} &= -mg\ell \sin \theta\\
    \frac{\partial L}{\partial \dot \theta} &= m\ell^2 \dot\theta\\
    \frac{d}{dt} \frac{\partial L}{\partial \dot \theta} &= m \ell^2 \ddot\theta\\
    \text{therefore:}\quad\quad&\\
    -mg\ell \sin \theta &= m\ell^2 \ddot \theta\\
    \ddot \theta &= -\frac{g}{\ell} \sin \theta.
\end{align*}
\]

The equation of motion is then obtained in the last step.

## 30/01/2022 Basic Quantum Computing
Classical computing bits and operations can be represented by vectors and matrices, the idea would then be elemental to extend to the quantum computing scenario.

### Classical Computing
Bits are represented by 2-vectors. The fundamental values are the 0s and 1s, denoted by:
\[
    |0\rangle = \begin{pmatrix}
                    1 \\ 
                    0 
                \end{pmatrix}, \qquad
    |1\rangle = \begin{pmatrix} 
                    0\\
                    1
                \end{pmatrix}.
\]

The four classical operation that are applicable on a classical bit are the identity, negation, always-zero, and always-one. They can be represented by their functional notation or as a matrix:
\[
\begin{align*}
    f(x) = x \qquad &\begin{pmatrix} 1 & 0\\ 0 & 1 \end{pmatrix}\\
    f(x) = \neg x \qquad &\begin{pmatrix} 0 & 1\\ 1 & 0 \end{pmatrix}\\
    f(x) = 0 \qquad &\begin{pmatrix} 1 & 1\\ 0 & 0 \end{pmatrix}\\
    f(x) = 1 \qquad &\begin{pmatrix} 0 & 0\\ 1 & 1 \end{pmatrix}.
\end{align*}
\]

An operation applied on a bit or on a combination of bits are reversible if the input can be constructed by its output and the type of operation applied. For the operation represented as a matrix $A$, it is reversible if and only if its determinant is non-zero.

Quantum computations only use reversible operations, and applying the same quantum operation twice will yield the identity operation: that is, all quantum operators are their own inverses.

#### Further
The tensor/outer product of two vectors $V$ and $W$ is defined as the matrix by the identity:
\[
    V \otimes W = VW^T.
\]

Note that:
\[
    (V \otimes W)_{ij} = V_i W_j.
\]

For the matrix is isomorphic to a vector of high dimensions, the tensor product of two vector spaces $\mathbb{R}^n$, $\mathbb{R}^m$ can be expressed as a higher dimensional vector space:
\[
    \mathbb{R}^n \otimes \mathbb{R}^m  \cong \mathbb{R}^{nm}.
\]

The tensor product of two bits represent the product state of the two bits:
\[
\begin{align*}
    | 00 \rangle &= \begin{pmatrix} 1 \\ 0 \end{pmatrix} \otimes \begin{pmatrix} 1\\0\end{pmatrix} \\
    | 01 \rangle &= \begin{pmatrix} 1 \\ 0 \end{pmatrix} \otimes \begin{pmatrix} 0 \\1 \end{pmatrix}.
\end{align*}
\]
The product state can be factored back into the individual states, the size of the product state of $n$ bits is $2^n$.

Operations on multiple bits operate on their product state, such as the reversible operation CNOT. The most significant bit is deems the control bit, and the other the target bit. If the control bit is 1, the operator flips the target bit; if the control bit is zero, the operator leaves the target bit. The matrix form of the CNOT operation is:
\[
    c = \begin{pmatrix}
    1 & 0 & 0 & 0\\
    0 & 1 & 0 & 0\\
    0 & 0 & 0 & 1\\
    0 & 0 & 1 & 0\\
\end{pmatrix}
\]

### Qubits
Qubits are also represented by a 2-vector but of complex numbers $\begin{pmatrix} a \\ b\end{pmatrix}$, where $\|a\|^2 + \|b\|^2=1$ such as:
\[
    \begin{pmatrix} -1 \\ 0 \end{pmatrix} \quad \begin{pmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{pmatrix}.
\]

Note that the qubits are always in the form of a superposition of 0 and 1, with the superposition collapsing when the state of the qubits are measured. The measured probability of a qubit being 0 is $\|a\|^2$ and being 1 is $\|b\|^2$.

For example, the qubit $\begin{pmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{pmatrix}$ has a $\frac{1}{2}$ chance of collapsing to a 0 and 1. The classical zero and one bit have a 100\% chance of collapsing to their respectable classical values.

The product state of qubits are the tensor products of each individual bit,

Like their classical counterparts, quantum gates are also represented as matrices.

#### Entanglement
Quantum entanglement of multiple qubits occurs when the tensor product cannot be factored into the individual qubit vectors. The multiple qubits are said to be entangled. Although the collapse of a single qubit in an entangled system will collapse the wave-function of all entangled qubits instantaneously, no information can be communicated.  

#### Quantum Teleportation
The technique uses multiple quantum entanglement to cut & paste quantum states from one location to another, with the aid of transfers of classical bits for the speed limit of information must not be broken.

#### Further, TODO!
Quantum unit circle, quantum circuit diagrams, quantum logic gates, a lot of algorithms.

## 18/04/2022 Taylor's Formula, Generalized
The iconic Taylor Series expansion $f(x)$ of an infinitely differentiable function $f$ at point $x$ is:
\[
    f(x + \varepsilon) = \lim_{n \to \infty} f(x) + \frac{\varepsilon}{1!} f'(x) + \frac{\varepsilon^2}{2!} f''(x) + \ldots + \frac{\varepsilon^n}{n!}f^{n}(x).
\]

Or, if setting the variable $k = x + \varepsilon$ and change the parameters, perhaps a more familiar form appears:
\[
    f_x(k) = \lim_{n \to \infty} f(x) + \frac{k - x}{1!}f'(x) + \frac{(k - x)^2}{2!} + \ldots + \frac{(k-x)^n}{n!} f^{n}(x).
\]

There are better notations for describing Taylor's Formula. Notice the Taylor expansion of $e^x$ at $0$ is,
\[
    e^{x} = \lim_{n\to\infty} 1 + \frac{1}{1!}x + \frac{1}{2!}x^2 + \ldots + \frac{1}{n!}x^n.
\]

Therefore by substitution, the taylor series of a function $f$ at point $x$ is:
\[
    f(x + \varepsilon) = e^{\varepsilon \frac{d}{dx}} f(x),
\]
where we are treating the differential operator $\frac{d}{dx}$ as a fraction.

The extension to multivariate functions is then elementary. The Taylor expansion of a multivariable function $f(X)$ at point $X$ is:
\[
    f(X + E) = e^{E \cdot \nabla} f(X),
\]
where $\nabla$ is a vector of derivatives:
\[
    \nabla = \begin{bmatrix} \frac{d}{dx^1} & \frac{d}{dx^2} & \ldots\end{bmatrix}
\]

## 22/04/2022 Einstein Notation
In linear algebra, the Einstein notation can help simplify writing the coefficients and dimension basis vectors of variables.

Simply, free variables such as $i$, $j$ denotes a summation operation - usually ranging from $1$ to $3$ for three dimensions. Superscripts denote basis vectors or column vector indices, subscripts denote coefficients or row vectors indices.

#### Dimensions
A three-dimensional vector $v$ can be written as:
\[
    v = v_{i} x^{i},
\]
which is equivalent to writing:
\[
    v = \sum_{i=1}^{3} v_{i}x^{i} = v_1i + v_2j + v_3k.
\]

#### Vectors and Matrices
Superscripts indicate row indices, and subscripts denote column indices. 

So for the general matrix $M$, $M^i_{\;j}$ indicates the element in the $i$th row and $j$th column. The notation $M^i$ indicates the $i$th row, $M_{\;j}$ means the $j$th column.

Notice that when applied to vectors/covectors, the superscript is designated to covectors (row vectors), and subscript for vectors (column vectors). This is because in physics: vectors are contravariant and represent quantities proportional to length, so by scaling down the basis vectors they must scale up; while covectors are covariant and represent quantities inverse to length, so scaling down the basis vectors scale them up.

## 10/11/2022 Derivagrals
A generalization of the basic calculus operators (derivatives, integrals) to their fractional counterparts, the "Derivagral" operator is non-local, smooth, and interesting. Here are its derivations and definitions.

### Derivation
"Cauchy's formula for repeated integrals" can be used to derive the fractional part of the derviagral operator.

#### Cauchy's formula for repeated integrals
For smooth function $f(x)$ with lower bound $x$, upper bound $a$, the nth integral is:
\[
\begin{align*}
    f^{(-n)} (x) &= \int_a^x \int_a^{b_1} \cdots \int_a^{b_{n-1}} f(b_n) \,db_n \cdots db_1 \\
    &= \frac{1}{(n-1)!} \int_a^x (x-t)^{n-1} f(t) \,dt
\end{align*}
\]

#### Fractional Integrals
Simply substitute $n \in \mathbb{Z}^+$ with $\alpha \in \mathbb{R}^+$, and replace the factorial function with
the generalized gamma function, $\Gamma(\alpha) = (\alpha - 1)!$. The $\alpha$th integral is:
\[
\begin{align*}
    f^{(-\alpha)} &= \frac{1}{\Gamma(\alpha)} \int_a^x (x-t)^{\alpha - 1} f(t) \, dt \\
    \Gamma(\alpha) &= \int_0^\infty t^{\alpha-1} e^{-t} \, dt
\end{align*}
\]

#### Fractional Derivatives
As integrals and derivatives are opposite operations, to take the $\alpha$th derivative implies taking the $k$th derivative,
$k \in \mathbb{Z}^+$ and $k \leq \alpha$, then take the $k-\alpha$th integral, of which it is fractional.
\[
    f^{(\alpha)} (x) = \frac{d^k}{dx^k} f^{(\alpha-k)} (x)
\]

### Definition
The full derivagral operator is defined as so, where $a$ is the lower bound, $x$ the upper, $\alpha$ the order of
derivative.
\[
    {}_{a}D_x^{\alpha} (f) = \begin{dcases}
        \frac{d^k}{dx^k} \, {}_{a}D_x^{\alpha-k}(f) & \text{if} \,\, k=\lceil{\alpha}\rceil \geq \alpha > 0 \\\\
        \frac{1}{\Gamma(-\alpha)} \int_a^x (x-t)^{(-\alpha)-1} f(t) \, dt & \text{if} \,\, \alpha \leq 0
    \end{dcases}
\]

## 11/12/2022 Feedforward Neural Network
This chapter contains a study that implements the basic feedforward neural network.

A feedforward neural network is a categorization network. It emits a vector output for a given vector input based on layers of nodes with weights and bias; the weights and bias are first optimized through a training process with sample datasets.

### Notations
The layers consist of an input layer, several hidden layers, and an output layer.

- The number $L$ is the $L$th layer starting and including the input layer, with has $L=0$. Notice that the input layer is only pseudo and do not have associated stimulus or weighting values.
- The nodes in the network are indexed by their layer $L$ and their index within the layer $i$, represented by $X^L_i$ where $X$ is the associated symbol.
- The node values have the symbol $N$.
- The stimulus values have the symbol $Z$.
- The bias values have the symbol $B$.
- The matrix $W^L$ is a matrix of the weights from layer $(L-1)$ to $L$, where the value $W^L_{ij}$ is the weighting from the node value $N^{L-1}_j$ to the node value $N^L_i$.
 
The dimensions of these vectors/matrices are:
\[
    \begin{align*}
        \text{let} \quad \dim N^L &= L_L \\
        \text{then} \quad \dim Z^L &= L_L \\
        \dim B^L &= L_L \\
        \dim W^L &= L_L \times (L_{L-1})\\
    \end{align*}
\]

Each node has an activation function $A(x)$, for example the sigmoid function:
\[
    A(x) = \frac{1}{1+e^{-x}}
\]
This network assumes that the activation function is the same for all nodes.

A neural network $NW$ is defined to be the tuple containing a list of weight matrices and a list of bias vectors:
\[
    NW = (W, B) = ([W^0, W^1, \dots, W^L], [B^0, B^1, \dots, B^L])
\]

### Evaluation
The following algorithm computes the output $\hat{Y}$ for a given input $X$ for a neural network.

First map the input vector $X$ to the layer $L=0$ of pseudo-values, where
\[
    X_i = N^0_i.
\]

Now inductively apply the following transformation process to compute the $N^L$ from $N^{L-1}$. In expanded form, this is
\[
    \begin{bmatrix}
        W^L_{11} & W^L_{12} & \dots \\
        W^L_{21} & \ddots   & \\
        \vdots  & & 
    \end{bmatrix}
    \begin{bmatrix}
        N^{L-1}_1 \\ N^{L-1}_2 \\ \vdots
    \end{bmatrix}
    +
    \begin{bmatrix}
        B^L_1 \\ B^L_2 \\ \vdots
    \end{bmatrix}
    =
    \begin{bmatrix}
        Z^L_1 \\ Z^L_2 \\ \vdots
    \end{bmatrix}
\]
then
\[
    \begin{bmatrix}
        N^{L}_1 \\ N^{L}_2 \\ \vdots
    \end{bmatrix}
    =
    \begin{bmatrix}
        A(Z^L_1) \\ A(Z^L_2) \\ \vdots
    \end{bmatrix}
\]

Written in matrix form, with a vectorized activation function $A$, this is:
\[
    N^L = A(W^L N^{L-1} + B^L).
\]

The output values $\hat{Y}$ is mapped from the last node value layer, where
\[
    \hat{Y}_i = N^L_i
\]

### Training
The training algorithm uses backpropagation (gradient descent) to compute the network weights and biases given a sample dataset. For the results to be accurate, the initial biases and weights of the neural network must be randomized.

The parameters are labeled to be:
- The number $\mu$ as the learning rate of the gradient descent
- The dataset as a tuple of inputs and outputs $D = (X, Y)$, where
\[
  X = [X^0, X^1, \dots], \; Y = [Y^0, Y^1, \dots]
\]
and $X^i$ is a vector input that
should output the vector $Y^i$ (the actual outputs of the network given the input vector is $\hat{Y}^i$) . Also let the dimensions of the dataset $D$ to be the length of its vectors $X$ and $Y$. 
- The cost function $C(\hat{y}, y)$, for example the mean squared error:
  \[
  C(\hat{y}, y) = (\hat{y} - y)^2
  \]

Given the above parameters and a network $NW$, define the mean cost $C$ of the network's evaluation on the entire sample dataset $D$ to be:
\[
\begin{align*}
    C &= \frac{1}{\dim D} \sum_i^{\dim D} C_i \\
    C_i &= C(\hat{Y}^i, Y^i)
\end{align*}
\]
where $C(\hat{Y}, Y)$ is the vectorized cost function, and the vector $\hat{Y}^i$ is the network evaluated output given the input $X^i$.

Broadly speaking, the updating process for the network $NW$ is a gradient descent on its biases $B$ and weights $W$ that minimizes the mean cost $C$ on the sample dataset. Symbolically, the simple gradient descent algorithm is:
\[
\begin{align*}
    B' &= B - \mu \frac{\partial C}{\partial B}\\
    W' &= W - \mu \frac{\partial C}{\partial W}\\
\end{align*}
\]
where the full partial cost derivatives against the biases and weights are the mean of the individual partial derivatives:
\[
\begin{align*}
    \frac{\partial C}{\partial B} &= \frac{1}{\dim D} \sum_i^{\dim D} \frac{\partial C_i}{\partial B}\\
    \frac{\partial C}{\partial W} &= \frac{1}{\dim D} \sum_i^{\dim D} \frac{\partial C_i}{\partial W}\\
\end{align*}
\]

The use of backpropagation calculates these individual partial derivatives of biases and weights that leads to computation of the total partial derivatives.

## 11/12/2022 FF Neural Network, Continued

### Training, Backpropagation
This algorithm calculates the partial derivatives $\frac{\partial C_i}{\partial B}$ and $\frac{\partial C_i}{\partial B}$ for the input output pair $(X^i, Y^i)$ given the neural network $NW = (B, W)$.

The following setup requires evaluating the network with the inputs $X^i$, filling the node values $N^L_i$ and stimulus values $Z^L_i$ and computing the cost $C_i$ through the cost function.

#### Node Derivatives
Firstly the node derivatives $\partial N$ are found, symbolically they are defined to be
\[
{\partial N}^L_i = \frac{\partial C_i}{\partial Z^L_i}
\]

Through the chain rule, the node derivatives are inductively computed starting from the last layer $L$
\[
\begin{align*}
    {\partial N}^L_i &= \frac{\partial C_i}{\partial N^L_i } \frac{\partial N^L_i}{\partial Z^L_i} \\
                     &= C'(N^L_i, Y^i) A'(Z^L_i)
\end{align*}
\]
where the functions $C'$ and $A'$ are the vectorized derivatives of the cost function and activation function.

The node derivatives of layers $(L-1)$ before the last layer are computed with the node derivatives of layer $L$.
\[
\begin{align*}
    {\partial N}^{L-1}_j &= \sum_i^{L_L} {\partial N}^L_i \frac{\partial Z^L_i}{\partial N^{L-1}_j} \frac{\partial N^{L-1}_j}{\partial Z^{L-1}_j} \\
    &= \sum_i^{L_L} {\partial N}^L_i W_{ij} A'(Z^{L-1}_j)
\end{align*}
\]

Vectorized, this is
\[
    \begin{align*}
{\partial N}^L &= C'(N^L, Y) \circ A'(Z^L) \\
{\partial N}^{L-1} &= \left( (W^L)^T {\partial N}^L \right) \circ A'(Z^L)
    \end{align*}
\]

where the operation $\circ$ denotes vector element-wise multiplication.

#### Bias/Weights partial derivatives
One can compute the partial derivatives of the cost function from the node derivatives.

The partial derivative with regard to each bias is
\[
\begin{align*}
    \frac{\partial C_i}{\partial B^L_i} &= \frac{\partial C_i}{\partial Z^L_i} \frac{\partial Z^L_i}{\partial B^L_i}\\
    &= {\partial N}^L_i
\end{align*}
\]

and the partial derivative for each weight value is
\[
\begin{align*}
    \frac{\partial C_i}{\partial W^L_{ij}} &= \frac{\partial C_i}{\partial Z^L_i} \frac{\partial Z^L_i}{\partial W^L_{ij}}\\
    &= {\partial N}^L_i N^{L-1}_j
\end{align*} 
\]

Vectorized, this is
\[
\begin{align*}
    \frac{\partial C_i}{\partial B^L} &= {\partial N}^L \\
    \frac{\partial C_i}{\partial W^L} &= {\partial N}^L \left( N^{L-1} \right)^T
\end{align*}
\]

The partial derivatives of the entire neural network biases and weights are therefore
\[
\begin{align*}
    \frac{\partial C_i}{\partial B} &= \left[ \frac{\partial C_i}{\partial B^1}, \frac{\partial C_i}{\partial B^2}, \dots  \right] \\
    \frac{\partial C_i}{\partial W} &= \left[ \frac{\partial C_i}{\partial W^1}, \frac{\partial C_i}{\partial W^2}, \dots  \right] \\
\end{align*}
\]

## 12/12 p-adic numbers
Introduction...

### Distance and Magnitude

### Representation

### Operations

### Applications

## 03/01/2023 Borwein Integrals
The chapter concerns the integral
\[
\newcommand{\sinc}[1]{\frac{\sin #1}{#1}}
    \int_{-\infty}^{\infty} \sinc{x} \times \sinc{x/3} \times \sinc{x/5} \times \dots \, dx = \pi  
\]
where
\[
\newcommand{\sinc}[1]{\frac{\sin #1}{#1}}
    \int_{-\infty}^{\infty} \sinc{x} \times \dots \times \sinc{x/15} \times \dots \, dx < \pi
\]

More generally
\[
    I(2n+1) = \int_{-\infty}^{\infty} \prod_{k=0}^{n} \frac{\sin(x/(2k+1))}{2k+1} \, dx = \begin{cases}
        \pi & \text{if } 2n+1 < 15 \\
        < \pi & \text{if } 2n+1 \geq 15
    \end{cases}
\]

### Identities
To approach the proof of such integral behaviors, we require some functional identities:

\[
\newcommand{\F}[0]{\mathcal{F}}

\begin{align}

\F f& = \hat f(v) = \int_{-\infty}^{\infty} f(t) e^{-2\pi ivt} \, dt \\

\F cf &= c \mathcal{F} f = c \hat f(v) \\

\F \,\text{rect}(\alpha t) &= \frac{1}{\alpha} \frac{\sin \pi v / \alpha}{\pi v / \alpha} \\

\F c &= c \delta(v) \\

\int_{-\infty}^{\infty} f(x) \delta(x-\alpha) \, dx &= f(\alpha) \\

\F \{f * g\} &= \F f \times \F g \\

f * g &= \int_{-\infty}^{\infty} f(t-\tau) g(\tau) \, d\tau

\end{align}
\]

### Proof
Consider the integral
\[
    I(2n + 1) = \int_{\mathbb{R}} \frac{\sin x}{x} \times \frac{\sin x/3}{x/3} \times \dots \times \frac{\sin x/(2n+1)}{2n+1} \, dx
\]
and denote the integrand to be the function $f_{2n+1}(x)$.

With the substitution of $d = 2n+1$, notice that
\[
\newcommand{\rect}[0]{\text{ rect }}
\newcommand{\F}[0]{\mathcal{F}}

\begin{align*}
    f_{d}(x) &= \frac{\sin x}{x} \times \frac{\sin x/3}{x/3} \times \dots \times \frac{\sin x/(d)}{d} \\
    &= \F \{ \pi \rect \pi x \} \times \F \{ 3\pi \rect 3\pi x \} \times \dots \times \F \{ d\pi \rect d\pi x \} \\
    &= \F \{(\pi \rect x) * (3\pi \rect 3x) * \dots * (d\pi \rect dx ) \} \\
    &= \F g_{d}(x)
\end{align*}
\]

Consider $g_{d}(x)$. Notice that it is composed of successive convolutions of the rectangular function.

First consider the width of the 'peak' of the function $g_{d}(x)$ denoted by $w(d)$. Initially $w(1)=1/\pi$ for that is the width of the first rectangular function, and because convolutions are similar to a moving average, the value $w(3)$ is equal to the first width subtracting the width of the second rectangular function $w(3) = 1/\pi - 1/3\pi$. Continuing, it is the value of $d=15$ where $w(15) < 0$ for
\[
    w(15) = \frac{1}{\pi} (1 - 1/3 - 1/5 - 1/7 - \dots - 1/15) < 0
\]

Now consider the value $g_{d}(0)$. Initially $g_1(0) = \pi$, and as convolutions are linear, the next case is
\[
\newcommand{\rect}[0]{\text{ rect }}

\begin{align*}
    g_3(0) &= \int_{\mathbb{R}} (\pi \rect \pi (0-\tau)) \times (3\pi \rect 3\pi \tau) \, d\tau \\
    &= 3\pi^2 \int_{\mathbb{R}} \rect \pi \tau \times \rect 3\pi\tau \, d\tau \\
    &= 3\pi^2 (\text{width} \times \text{height}) \\
    &= 3\pi^2 (1/3\pi \times 1) \\
    &= \pi
\end{align*}
\]

This trend continues for all $d < 15$ as the width is always positive (and thus the rectangle area approximation is exact). Use the case $d=5$,
\[
\newcommand{\rect}[0]{\text{ rect }}

\begin{align*}
    g_3(t) &= \pi \\
    g_5(0) &= \int_{\mathbb{R}} g_3(-\tau) \times (5\pi \rect 5\pi\tau) \, d\tau \\
    &= \int_{\mathbb{R}} \pi \times 5\pi \rect 5\pi\tau \, d\tau \\
    &= 5\pi^2 (1/5\pi \times 1) \\
    &= \pi
\end{align*}
\]

Therefore for $d < 15$, we can simplify the original integral
\[
\begin{align*}
    I(2n+1) &= I(d) \\
    &= \int_{\mathbb{R}} f_d(x) \, dx \\
    &= \int_{\mathbb{R}} \mathcal{F} g_d(t) \, dx \\
    &= \int_{\mathbb{R}} \int_{\mathbb{R}} g_d(t) e^{-2\pi ixt} \, dt \, dx\\
    &= \int_{\mathbb{R}} \int_{\mathbb{R}} g_d(t) e^{-2\pi ixt} \, dx \, dt\\
    &= \int_{\mathbb{R}} g_d(t) \int_{\mathbb{R}} e^{-2\pi ixt} \, dx \, dt\\
    &= \int_{\mathbb{R}} g_d(t) \mathcal{F} \{ 1 \} \, dt\\
    &= \int_{\mathbb{R}} g_d(t) \delta(t) \, dt\\
    &=  g_d(0) \\
    &= \pi
\end{align*}
\]

For larger $d$, $g_d(0)$ becomes smaller due to the convolution of functions with no peak levels. Thus concludes the proof of the Borwein Integrals.


# Economics

## 17/12/2021 Writing Structure

While the structure of DEEDS - Definition, Explanation, Example, Diagram, and Summary is easy to remember and applicable,
and the considerations of CLASPP - Conclusion, Long short terms, Assumptions, Stakeholders, Pros and Cons, and Priorities
are useful, a more detailed structure for Economic external questions can be applied to reduce thinking and planning time.

#### Paper 1

Part (a) 10 mark questions can be answered using this structure:

Note: no need for diagrams unless indicated, no need for conclusions, no need to evaluate the consequences (weighing the impacts of each element)

1. First Paragraph
   - **Definitions**, define all elements of the question.
   - **Answer** the question in a statement. Make sure to mention all the keywords.
2. Further Paragraphs (for each item for compare, define, explain questions)
   - **Definitions**, define the element
   - **Details**, describe the element in more detail
   - **Examples**, state a singular example of the element, can add one sentence as explanation
   - **Consequences**, list 2-3 consequences of the element, can be single sentences. If asking to compare, only list differences

Part (b) 15 mark questions can be answered using this structure:

Note: no need for definition if defined in part (a), no introduction, at least 2 diagrams

1. First Paragraph
   - **Answer**, state two views of the topic, only brief reasoning are needed
2. Further Paragraphs (can be "for, for, against, against" or "for, against, for" or "for, against")
   - **Reason**, describe the reason why the topic supports the view
   - **Consequences**, describe the consequences of the topic
   - **Examples**, state one example that follows the view (Optional: follow with "Moreover" for style points)
   - **Diagram**, use a diagram to mathematically show the change, state graphical changes. If no diagram, list more impacts
3. Evaluation (if discuss question, only impacts of stakeholder on different scenarios)
   - **Scenario**, state and expand on one view using a scenario, (even if not scenario met, view still stands)
   - **Additions**, state any extra requirements and thoughts to improve the downsides
   

#### Paper 2
Blah

