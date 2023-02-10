var searchIndex = JSON.parse('{\
"shenlong":{"doc":"Shenlong is a library for building LLVM IR from Cairo.","t":[0,0,0,0,4,6,17,13,13,13,13,13,13,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,4,6,3,13,13,13,13,13,13,11,11,11,11,12,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,12,12,11,11,12,11,11,11,11,12,11,11,11,12,11,11,11,11,11,11,11,11,11,11,12,11,11,12,12,11,11],"n":["core","sierra","errors","llvm_compiler","CompilerError","CompilerResult","DEBUG_NAME_EXPECTED","FuncNotFound","InvalidState","InvalidStateTransition","LlvmPrintError","NoDebugName","NoReturnType","NoReturnValue","NoTypeProvided","PathNotFound","TypeNotFound","VarNotFound","borrow","borrow_mut","fmt","fmt","from","from","from","into","provide","source","to_string","try_from","try_into","type_id","upcast","vzip","CompilationState","CompilationStateTransition","Compiler","CoreLibFunctionsProcessed","Finalized","FunctionsProcessed","NotStarted","StatementsProcessed","TypesProcessed","borrow","borrow","borrow_mut","borrow_mut","builder","check_state","clone","clone_into","compile_from_code","compile_from_file","compile_sierra_program_to_llvm","context","dup","eq","equivalent","felt","felt_add","felt_const","felt_is_zero","felt_sub","fmt","from","from","get_type_from_name","hash","id_from_name","into","into","main_calls","module","move_to","non_zero","output_path","process_core_lib_functions","process_funcs","process_statements_from_until","process_types","program","rename","sierra_struct","state","state","store_temp","struct_construct","struct_deconstruct","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","types","upcast","upcast","valid_state_transitions","variables","vzip","vzip"],"q":["shenlong","shenlong::core","shenlong::core::sierra","","shenlong::core::sierra::errors","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","shenlong::core::sierra::llvm_compiler","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["The core library of Shenlong compiler.","Sierra related modules.","","LLVM compiler.","Compiler errors.","","","LLVM IR function not found","Compiler state doesn’t exist.","Invalid compiler state transition.","LLVM IR Error (verify or write to file).","Object has no debug name.","LLVM IR function has no return type.","LLVM IR function has no return value.","No LLVM IR type was provided.","File or folder not found.","LLVM IR type not found.","LLVM IR variable not found.","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","Compilation state. This is used to keep track of the …","A compilation state transition. This is a tuple of two …","Compiler is the main entry point for the LLVM backend. It …","The core library functions have been processed.","The compilation has been finalized. This is the final …","The functions have been processed.","The compilation has not started yet.","The statements have been processed.","The types have been processed.","","","","","The LLVM builder.","Check if the compilation is in a valid state. If the …","","","Compile a Sierra program code to LLVM IR.","Compile a Sierra program file to LLVM IR.","Compiles a Sierra <code>Program</code> representation to LLVM IR.","The LLVM context.","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","Mapping from type name to program id.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls in the main function.","The LLVM module.","Move the compilation state to the next state.","","The output path.","Process core library functions in the Sierra program.","Process types in the Sierra program. For each type …","Process statements in the Sierra program.","Process types in the Sierra program. For each type …","The Sierra program.","","","Get the current compilation state.","The current compilation state.","","","","","","","","","","","The types.","","","The valid state transitions.","The variables of the program.","",""],"i":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,13,13,13,13,13,13,12,13,12,13,12,12,13,13,12,12,12,12,12,13,13,12,12,12,12,12,13,12,13,12,13,12,12,13,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,12,13,12,13,12,13,12,12,13,12,12,12,13],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[1,2],[[4,[3]]]],[[1,2],[[4,[3]]]],[5,1],[6,1],[[]],[[]],[7],[1,[[9,[8]]]],[[],10],[[],4],[[],4],[[],11],[[]],[[]],0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],0,[[12,13],[[4,[1]]]],[13,13],[[]],[[14,14],[[4,[1]]]],[[14,14],[[4,[1]]]],[[15,14],[[4,[1]]]],0,[[12,16],[[4,[1]]]],[[13,13],17],[[],17],[[12,18]],[[12,16],[[4,[1]]]],[[12,16],[[4,[1]]]],[[12,19,20],[[4,[1]]]],[[12,16],[[4,[1]]]],[[13,2],[[4,[3]]]],[[]],[[]],[[12,14],[[4,[21,1]]]],[13],0,[[]],[[]],0,0,[[12,13],[[4,[1]]]],[[12,18]],0,[12,[[4,[1]]]],[12,[[4,[1]]]],[[12,20,[9,[20]]],[[4,[1]]]],[12,[[4,[1]]]],0,[[12,16],[[4,[1]]]],[[12,18]],[12,13],0,[[12,16],[[4,[1]]]],[[12,16]],[[12,16]],[[]],[[],4],[[],4],[[],4],[[],4],[[],11],[[],11],0,[[]],[[]],0,0,[[]],[[]]],"p":[[4,"CompilerError"],[3,"Formatter"],[3,"Error"],[4,"Result"],[3,"Error"],[3,"LLVMString"],[3,"Demand"],[8,"Error"],[4,"Option"],[3,"String"],[3,"TypeId"],[3,"Compiler"],[4,"CompilationState"],[15,"str"],[3,"Program"],[3,"LibfuncDeclaration"],[15,"bool"],[3,"TypeDeclaration"],[3,"GenInvocation"],[15,"usize"],[4,"BasicTypeEnum"]]},\
"shenlong_cli":{"doc":"Command line interface of Shenlong. Shenlong is a library …","t":[0,0,3,4,13,13,3,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,7,7],"n":["cli","emoji","Command","Commands","CompileToLlvm","Sierra","SierraCommands","SierraSubCommands","augment_args","augment_args","augment_args_for_update","augment_args_for_update","augment_subcommands","augment_subcommands","augment_subcommands_for_update","augment_subcommands_for_update","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","command","command","command","command","command_for_update","command_for_update","config","fmt","fmt","from","from","from","from","from_arg_matches","from_arg_matches","from_arg_matches","from_arg_matches","from_arg_matches_mut","from_arg_matches_mut","from_arg_matches_mut","from_arg_matches_mut","group_id","group_id","has_subcommand","has_subcommand","into","into","into","into","run","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","upcast","upcast","upcast","upcast","update_from_arg_matches","update_from_arg_matches","update_from_arg_matches","update_from_arg_matches","update_from_arg_matches_mut","update_from_arg_matches_mut","update_from_arg_matches_mut","update_from_arg_matches_mut","output_path","program_path","CHECK_MARK_BUTTON","SPARKLE"],"q":["shenlong_cli","","shenlong_cli::cli","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","shenlong_cli::cli::SierraSubCommands","","shenlong_cli::emoji",""],"d":["","","Shenlong command line interface.","List of supported commands.","Compiles a Sierra program to LLVM IR.","Ethereum related subcommands","Sierra related commands.","Sierra related subcommands.","","","","","","","","","","","","","","","","","","","List of supported commands.","Ethereum related subcommands.","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Main entry point for the Shenlong command line interface.","","","","","","","","","","","","","","","","","","","","","","","","","The path to the output LLVM IR file. If not specified, the …","The path to the Sierra program to compile.","",""],"i":[0,0,0,0,5,10,0,0,7,2,7,2,10,5,10,5,7,10,2,5,7,10,2,5,7,2,7,2,7,2,7,2,5,7,10,2,5,7,10,2,5,7,10,2,5,7,2,10,5,7,10,2,5,7,7,10,2,5,7,10,2,5,7,10,2,5,7,10,2,5,7,10,2,5,7,10,2,5,17,17,0,0],"f":[0,0,0,0,0,0,0,0,[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],1],[[],1],0,0,[[],1],[[],1],0,[[2,3],4],[[5,3],4],[[]],[[]],[[]],[[]],[6,[[9,[7,8]]]],[6,[[9,[10,8]]]],[6,[[9,[2,8]]]],[6,[[9,[5,8]]]],[6,[[9,[7,8]]]],[6,[[9,[10,8]]]],[6,[[9,[2,8]]]],[6,[[9,[5,8]]]],[[],[[12,[11]]]],[[],[[12,[11]]]],[13,14],[13,14],[[]],[[]],[[]],[[]],[7,15],[[],9],[[],9],[[],9],[[],9],[[],9],[[],9],[[],9],[[],9],[[],16],[[],16],[[],16],[[],16],[[]],[[]],[[]],[[]],[[7,6],[[9,[8]]]],[[10,6],[[9,[8]]]],[[2,6],[[9,[8]]]],[[5,6],[[9,[8]]]],[[7,6],[[9,[8]]]],[[10,6],[[9,[8]]]],[[2,6],[[9,[8]]]],[[5,6],[[9,[8]]]],0,0,0,0],"p":[[3,"Command"],[3,"SierraCommands"],[3,"Formatter"],[6,"Result"],[4,"SierraSubCommands"],[3,"ArgMatches"],[3,"Command"],[6,"Error"],[4,"Result"],[4,"Commands"],[3,"Id"],[4,"Option"],[15,"str"],[15,"bool"],[6,"Result"],[3,"TypeId"],[13,"CompileToLlvm"]]},\
"shenlong_core":{"doc":"","t":[0,0,0,4,6,17,13,13,13,13,13,13,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,4,6,3,13,13,13,13,13,13,11,11,11,11,12,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,12,12,11,11,12,11,11,11,11,12,11,11,11,12,11,11,11,11,11,11,11,11,11,11,12,11,11,12,12],"n":["sierra","errors","llvm_compiler","CompilerError","CompilerResult","DEBUG_NAME_EXPECTED","FuncNotFound","InvalidState","InvalidStateTransition","LlvmPrintError","NoDebugName","NoReturnType","NoReturnValue","NoTypeProvided","PathNotFound","TypeNotFound","VarNotFound","borrow","borrow_mut","fmt","fmt","from","from","from","into","provide","source","to_string","try_from","try_into","type_id","upcast","CompilationState","CompilationStateTransition","Compiler","CoreLibFunctionsProcessed","Finalized","FunctionsProcessed","NotStarted","StatementsProcessed","TypesProcessed","borrow","borrow","borrow_mut","borrow_mut","builder","check_state","clone","clone_into","compile_from_code","compile_from_file","compile_sierra_program_to_llvm","context","dup","eq","equivalent","felt","felt_add","felt_const","felt_is_zero","felt_sub","fmt","from","from","get_type_from_name","hash","id_from_name","into","into","main_calls","module","move_to","non_zero","output_path","process_core_lib_functions","process_funcs","process_statements_from_until","process_types","program","rename","sierra_struct","state","state","store_temp","struct_construct","struct_deconstruct","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","types","upcast","upcast","valid_state_transitions","variables"],"q":["shenlong_core","shenlong_core::sierra","","shenlong_core::sierra::errors","","","","","","","","","","","","","","","","","","","","","","","","","","","","","shenlong_core::sierra::llvm_compiler","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Sierra related modules.","","LLVM compiler.","Compiler errors.","","","LLVM IR function not found","Compiler state doesn’t exist.","Invalid compiler state transition.","LLVM IR Error (verify or write to file).","Object has no debug name.","LLVM IR function has no return type.","LLVM IR function has no return value.","No LLVM IR type was provided.","File or folder not found.","LLVM IR type not found.","LLVM IR variable not found.","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","Compilation state. This is used to keep track of the …","A compilation state transition. This is a tuple of two …","Compiler is the main entry point for the LLVM backend. It …","The core library functions have been processed.","The compilation has been finalized. This is the final …","The functions have been processed.","The compilation has not started yet.","The statements have been processed.","The types have been processed.","","","","","The LLVM builder.","Check if the compilation is in a valid state. If the …","","","Compile a Sierra program code to LLVM IR.","Compile a Sierra program file to LLVM IR.","Compiles a Sierra <code>Program</code> representation to LLVM IR.","The LLVM context.","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","Mapping from type name to program id.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls in the main function.","The LLVM module.","Move the compilation state to the next state.","","The output path.","Process core library functions in the Sierra program.","Process types in the Sierra program. For each type …","Process statements in the Sierra program.","Process types in the Sierra program. For each type …","The Sierra program.","","","Get the current compilation state.","The current compilation state.","","","","","","","","","","","The types.","","","The valid state transitions.","The variables of the program."],"i":[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,13,13,13,13,13,13,12,13,12,13,12,12,13,13,12,12,12,12,12,13,13,12,12,12,12,12,13,12,13,12,13,12,12,13,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,12,13,12,13,12,13,12,12,13,12,12],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[1,2],3],[[1,2],3],[4,1],[5,1],[[]],[[]],[6],[1,[[8,[7]]]],[[],9],[[],10],[[],10],[[],11],[[]],0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],0,[[12,13],14],[13,13],[[]],[[15,15],14],[[15,15],14],[[16,15],14],0,[[12,17],14],[[13,13],18],[[],18],[[12,19]],[[12,17],14],[[12,17],14],[[12,20,21],14],[[12,17],14],[[13,2],3],[[]],[[]],[[12,15],[[14,[22]]]],[13],0,[[]],[[]],0,0,[[12,13],14],[[12,19]],0,[12,14],[12,14],[[12,21,[8,[21]]],14],[12,14],0,[[12,17],14],[[12,19]],[12,13],0,[[12,17],14],[[12,17]],[[12,17]],[[]],[[],10],[[],10],[[],10],[[],10],[[],11],[[],11],0,[[]],[[]],0,0],"p":[[4,"CompilerError"],[3,"Formatter"],[6,"Result"],[3,"Error"],[3,"LLVMString"],[3,"Demand"],[8,"Error"],[4,"Option"],[3,"String"],[4,"Result"],[3,"TypeId"],[3,"Compiler"],[4,"CompilationState"],[6,"CompilerResult"],[15,"str"],[3,"Program"],[3,"LibfuncDeclaration"],[15,"bool"],[3,"TypeDeclaration"],[6,"Invocation"],[15,"usize"],[4,"BasicTypeEnum"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};