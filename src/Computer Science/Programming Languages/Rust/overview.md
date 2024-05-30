---
title: Overview
order: 0
---

# Rust - Overview

## Conventions

Rust conventions, concepts, and best practices.

- Variables are immutable in Rust by default. Add `mut` before the variable name
  to make it mutable: `let mut number = 5;`
- Use `::` to call an associated function to a type: `... String::new();`
- Use `&` to pass by reference: `&var`. References are also immutable by
  default. Make them mutable: `&mut var`
- Statically typed
  - Scalar Types - Data types that represent singular values (integers,
    floating-points, booleans, characters)
  - Compound Types - Data types that represent value groups of multiple types
    (tuples, arrays)
- `snake_case` function and variable names
- Expressions are valid rust lines alone that do not end with semicolons
- Functions implicitly return the value of the last expression in the function

<!-- {/* ### Ownership */} -->

<!-- {/* > Add detail here on ownership and references */} -->

## Resources

Useful Rust resources.

- [The Rust Book](https://doc.rust-lang.org/book/)
- [Rust By Example](https://doc.rust-lang.org/stable/rust-by-example/)
- [Read Rust](https://readrust.net/)
- [A Half Hour to Learn Rust](https://fasterthanli.me/articles/a-half-hour-to-learn-rust)
- [Rust Talks - No Boilerplate](https://www.youtube.com/playlist?list=PLZaoyhMXgBzoM9bfb5pyUOT3zjnaDdSEP)
- [This Week in Rust](https://this-week-in-rust.org/)
- [Are we web yet?](https://www.arewewebyet.org/)
- [Blessed.rs](https://blessed.rs/crates)
- [The Rustup Book](https://rust-lang.github.io/rustup/index.html)
