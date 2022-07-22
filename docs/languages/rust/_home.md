# Rust

Rust is a multi purpose *ahead-of-time compiled*, statically typed, expression
based language.

## Tools

* [`rustup`](https://rust-lang.github.io/rustup/) - Install Rust and rust tooling
* [`rustc`](https://doc.rust-lang.org/book/ch01-01-installation.html) - Rust
  language compiler
* [`rustfmt`](https://rust-lang.github.io/rustfmt/?version=v1.5.1&search=) -
  Rust formatter and linter
* [`cargo`](https://doc.rust-lang.org/stable/cargo/) - Rust build and packaging system

## Notes

* Variables are immutable in Rust by default. Add `mut` before the variable name
  to make it mutable: `let mut number = 5;`
* Use `::` to call an associated function to a type: `... String::new();`
* Use `&` to pass by reference: `&var`. References are also immutable by
  default. Make them mutable: `&mut var`
* Statically typed
  * Scalar Types - Data types that represent singular values (integers,
  floating-points, booleans, characters)
  * Compound Types - Data types that represent value groups of multiple types
  (tuples, arrays)
* `snake_case` function and variable names
* Expressions are valid rust lines alone that do not end with semicolons
* Functions implicitly return the value of the last expression in the function

### Ownership

> Add detail here on ownership and references

## Resources

* [The Rust Programming Language](https://doc.rust-lang.org/book/)
* [The Rustup Book](https://rust-lang.github.io/rustup/index.html)
