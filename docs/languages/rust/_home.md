# Rust

Rust is a multi purpose *ahead-of-time compiled* language.

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

## Resources

* [The Rust Programming Language](https://doc.rust-lang.org/book/)
* [The Rustup Book](https://rust-lang.github.io/rustup/index.html)
