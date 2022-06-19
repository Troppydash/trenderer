# Circuits

## DC Circuits

### R Circuit

#### Diagram
```
                  │
               │  │
┌──────────────┤  ├───────────────┐
│              │  │               │
│                 │               │
│                                 │
│                                 │
│                                 │
│                                 │
│                                 │
│          ┌───────────┐          │
└──────────┤           ├──────────┘
           └───────────┘
```

#### iv equation
\[
    i = \frac{1}{R}v
\]

#### Explorer

\begin{graph}
"(v, p) => 1/p.R * v",
R=1,
{
    canvasOptions: {
        size: {
            width: 400,
            height: 400
        }
    },
    graphOptions: {
         xrange: [-5, 5],
         yrange: [-5, 5]
    }
}
\end{graph}



### RC Circuit

#### Diagram

```
                    │
                 │  │
┌────────────────┤  ├────────────────────────────┐
│                │  │                            │
│                   │                            │
│                                                │
│                                                │
│                                                │
│                           │  │                 │
│     ┌──────────┐          │  │                 │
└─────┤          ├──────────┤  ├─────────────────┘
      └──────────┘          │  │
                            │  │
```

#### iv equation

Laplace Equation
\[
    \varepsilon - \frac{1}{C}\int_0^t i(\tau) d\tau - V_0 - R i(t)=0
\]

Solutions
\[
    i(t) = \frac{\epsilon - V_0}{R} e^{-\frac{1}{CR}t}
\]

#### Explorer

\begin{graph}
"(t, p) => (p.ep - p.V0) * Math.exp(-1 / (p.C * p.R) * t)",
V0=0;ep=10;C=0.01;R=100,
{
    canvasOptions: {
        size: {
            width: 400,
            height: 400
        }
    },
    graphOptions: {
        xrange: [-5, 10],
        yrange: [-5, 20]
    }
}
\end{graph}
