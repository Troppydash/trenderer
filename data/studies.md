# Twenty Twenty-one

## Mathematics

### 16/12/2021 Image Compression (Fourier Transforms)

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


## Economics

### 17/12/2021 Writing Structure

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
