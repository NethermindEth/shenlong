use std::path::Path;

use shenlong_core::sierra::errors::CompilerResult;
use shenlong_core::sierra::llvm_compiler;
fn main() -> CompilerResult<()> {
    llvm_compiler::Compiler::compile_from_file(
        Path::new("./core/tests/test_data/sierra/fib_main.sierra"),
        Path::new("./core/tests/test_data/llvm/ll/fib_main.ll"),
        Path::new("./core/tests/test_data/llvm/bc/fib_main.bc"),
    )?;
    Ok(())
}
