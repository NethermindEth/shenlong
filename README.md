<div align="center">
  <img src="docs/images/logo/logo.png" height="200">
  <br />
  <a href="https://github.com/keep-starknet-strange/shenlong/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  -
  <a href="https://github.com/keep-starknet-strange/shenlong/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  -
  <a href="https://github.com/keep-starknet-strange/shenlong/discussions">Ask a Question</a>
</div>

<div align="center">
<br />

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/keep-starknet-strange/shenlong/test?style=flat-square&logo=github)
[![Project license](https://img.shields.io/github/license/keep-starknet-strange/shenlong.svg?style=flat-square)](LICENSE)
[![Pull Requests welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/keep-starknet-strange/shenlong/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)

</div>


<details open="open">
<summary>Table of Contents</summary>

- [Report a Bug](#report-a-bug)
- [Request a Feature](#request-a-feature)
- [Report a bug](#report-a-bug-1)
- [Request a feature](#request-a-feature-1)
- [About](#about)
  - [Built With](#built-with)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
    - [Rust](#rust)
    - [LLVM](#llvm)
  - [Installation](#installation)
    - [shenlongup](#shenlongup)
    - [Environment variables](#environment-variables)
- [Usage](#usage)
  - [Command line interface](#command-line-interface)
    - [Compile Sierra to LLVM IR](#compile-sierra-to-llvm-ir)
- [Roadmap](#roadmap)
- [Support](#support)
- [Project assistance](#project-assistance)
- [Contributing](#contributing)
- [Authors \& contributors](#authors--contributors)
- [Security](#security)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contributors ✨](#contributors-)

</details>

---

## Report a bug

If you find a bug, please open a
[GitHub issue](https://github.com/keep-starknet-strange/shenlong/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+)!

## Request a feature

To request a new feature, please open an issue following
[this template](https://github.com/keep-starknet-strange/shenlong/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+).

## About

> Shenlong is a blazingly fast ⚡ tool to generate LLVM IR from Cairo, written in Rust 🦀

### Built With

- [Rust](https://www.rust-lang.org/)
- [inkwell](https://thedan64.github.io/inkwell/)
- [cairo](https://github.com/starkware-libs/cairo)

## Architecture

> **[TODO]**

## Getting Started

### Prerequisites

#### [Rust](https://www.rust-lang.org/tools/install)

The project requires nightly rustup:

```bash
rustup toolchain install nightly
rustup default nightly
```

#### LLVM

In order to build the project, you need to have LLVM installed on your system.

Consider using [llvmenv](https://crates.io/crates/llvmenv) to manage multiple LLVM builds.

For example, to install LLVM 13.0.0 and use it globally:

```bash
llvmenv build-entry 13.0.0
llvmenv global 13.0.0
```

Note on macOS: `llvmenv` will install LLVM in `$HOME/Library/Application\ Support` by default and it seems to be an issue when used with `llvm-sys`.
To fix this you can use a custom version of `llvmenv` that will let you choose the installation directory through environment variables. See [this PR](https://github.com/llvmenv/llvmenv/pull/127) for more details.

Example of `.zshenv` file:

```bash
## LLVM
export LLVMENV_RUST_BINDING="1"

# This line will automatically export a `LLVM_SYS_XXX_PREFIX` environment variable.
# This will allow `llvm-sys` to find the LLVM installation.
source <(llvmenv zsh)

### LLVM ENV
export LLVMENV_CONFIG_DIR="$HOME/llvmenv/config"
export LLVMENV_CACHE_DIR="$HOME/llvmenv/cache"
export LLVMENV_DATA_DIR="$HOME/llvmenv/data"
```

### Installation

#### shenlongup

To install with `shenlongup` run (shenlongup requires nightly rustup):

```bash
curl -sL https://raw.githubusercontent.com/keep-starknet-strange/shenlong/main/shenlongup | sh
```

#### Environment variables

Copy the `.env.example` file to a `.env` file and populate each variable:

```bash
cp examples/.env.example .env
```

Build from source:

```bash
cargo build --all --release
```

The binaries will be located in `target/release/`.
Specifically, the binary for the CLI is `target/release/shenlong_cli`.

## Usage

### Command line interface

```bash
Shenlong, make me a LLVM compiler!
Shenlong is a blazingly fast ⚡ tool to generate LLVM IR from Cairo, written in Rust 🦀

Usage: shenlong_cli [CONFIG] <COMMAND>

Commands:
  sierra  Sierra related subcommands
  help    Print this message or the help of the given subcommand(s)

Arguments:
  [CONFIG]

Options:
  -h, --help     Print help information
  -V, --version  Print version information
```

#### Compile Sierra to LLVM IR

```bash
shenlong_cli sierra compile-to-llvm \
--program-path examples/sierra/add.sierra \
--output-path target/llvm/add.ir
```

## Roadmap

See the [open issues](https://github.com/keep-starknet-strange/shenlong/issues) for
a list of proposed features (and known issues).

- [Top Feature Requests](https://github.com/keep-starknet-strange/shenlong/issues?q=label%3Aenhancement+is%3Aopen+sort%3Areactions-%2B1-desc)
  (Add your votes using the 👍 reaction)
- [Top Bugs](https://github.com/keep-starknet-strange/shenlong/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Areactions-%2B1-desc)
  (Add your votes using the 👍 reaction)
- [Newest Bugs](https://github.com/keep-starknet-strange/shenlong/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

## Support

Reach out to the maintainer at one of the following places:

- [GitHub Discussions](https://github.com/keep-starknet-strange/shenlong/discussions)
- Contact options listed on
  [this GitHub profile](https://github.com/starknet-exploration)

## Project assistance

If you want to say **thank you** or/and support active development of shenlong:

- Add a [GitHub Star](https://github.com/keep-starknet-strange/shenlong) to the
  project.
- Tweet about the shenlong.
- Write interesting articles about the project on [Dev.to](https://dev.to/),
  [Medium](https://medium.com/) or your personal blog.

Together, we can make shenlong **better**!

## Contributing

First off, thanks for taking the time to contribute! Contributions are what make
the open-source community such an amazing place to learn, inspire, and create.
Any contributions you make will benefit everybody else and are **greatly
appreciated**.

Please read [our contribution guidelines](docs/CONTRIBUTING.md), and thank you
for being involved!

## Authors & contributors

For a full list of all authors and contributors, see
[the contributors page](https://github.com/keep-starknet-strange/shenlong/contributors).

## Security

shenlong follows good practices of security, but 100% security cannot be assured.
shenlong is provided **"as is"** without any **warranty**. Use at your own risk.

_For more information and to report security issues, please refer to our
[security documentation](docs/SECURITY.md)._

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.

## Acknowledgements

- Shout out to StarkWare for the amazing Cairo compiler and the Cairo language
  itself, specifically to the compiler team for their help and support and for the primitives on which shenlong is built.
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/abdelhamidbakhta"><img src="https://avatars.githubusercontent.com/u/45264458?v=4?s=100" width="100px;" alt="Abdel @ StarkWare "/><br /><sub><b>Abdel @ StarkWare </b></sub></a><br /><a href="https://github.com/keep-starknet-strange/shenlong/commits?author=abdelhamidbakhta" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/LucasLvy"><img src="https://avatars.githubusercontent.com/u/70894690?v=4?s=100" width="100px;" alt="Lucas @ StarkWare"/><br /><sub><b>Lucas @ StarkWare</b></sub></a><br /><a href="https://github.com/keep-starknet-strange/shenlong/commits?author=LucasLvy" title="Code">💻</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!