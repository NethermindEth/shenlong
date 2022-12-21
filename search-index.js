var searchIndex = JSON.parse('{\
"shenlong":{"doc":"Shenlong is a library for building LLVM IR from Cairo.","t":[0,0,0,3,11,11,12,11,11,11,12,11,11,12,12,12,11,11,11,12],"n":["core","sierra","llvm_compiler","Compiler","borrow","borrow_mut","builder","compile_from_code","compile_from_file","compile_sierra_program_to_llvm","context","from","into","module","output_path","program","try_from","try_into","type_id","variables"],"q":["shenlong","shenlong::core","shenlong::core::sierra","shenlong::core::sierra::llvm_compiler","","","","","","","","","","","","","","","",""],"d":["The core library of Shenlong compiler.","Sierra related modules.","","Compiler is the main entry point for the LLVM backend. It …","","","","Compile a Sierra program code to LLVM IR.","Compile a Sierra program file to LLVM IR.","Compiles a Sierra <code>Program</code> representation to LLVM IR.","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","",""],"i":[0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"f":[0,0,0,0,[[]],[[]],0,[[1,1],[[3,[2]]]],[[1,1],[[3,[2]]]],[[4,1],[[3,[2]]]],0,[[]],[[]],0,0,0,[[],3],[[],3],[[],5],0],"p":[[15,"str"],[3,"Report"],[4,"Result"],[3,"Program"],[3,"TypeId"],[3,"Compiler"]]},\
"shenlong_cli":{"doc":"Command line interface of Shenlong. Shenlong is a library …","t":[0,0,3,4,13,13,3,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,7,7],"n":["cli","emoji","Command","Commands","CompileToLlvm","Sierra","SierraCommands","SierraSubCommands","augment_args","augment_args","augment_args_for_update","augment_args_for_update","augment_subcommands","augment_subcommands","augment_subcommands_for_update","augment_subcommands_for_update","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","command","command","command","command","command_for_update","command_for_update","config","fmt","fmt","from","from","from","from","from_arg_matches","from_arg_matches","from_arg_matches","from_arg_matches","from_arg_matches_mut","from_arg_matches_mut","from_arg_matches_mut","from_arg_matches_mut","group_id","group_id","has_subcommand","has_subcommand","into","into","into","into","run","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","update_from_arg_matches","update_from_arg_matches","update_from_arg_matches","update_from_arg_matches","update_from_arg_matches_mut","update_from_arg_matches_mut","update_from_arg_matches_mut","update_from_arg_matches_mut","0","output_path","program_path","CHECK_MARK_BUTTON","SPARKLE"],"q":["shenlong_cli","","shenlong_cli::cli","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","shenlong_cli::cli::Commands","shenlong_cli::cli::SierraSubCommands","","shenlong_cli::emoji",""],"d":["","","Shenlong command line interface.","List of supported commands.","Compiles a Sierra program to LLVM IR.","Ethereum related subcommands","Sierra related commands.","Sierra related subcommands.","","","","","","","","","","","","","","","","","","","List of supported commands.","Ethereum related subcommands.","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Main entry point for the Shenlong command line interface.","","","","","","","","","","","","","","","","","","","","","","The path to the output LLVM IR file. If not specified, the …","The path to the Sierra program to compile.","",""],"i":[0,0,0,0,5,10,0,0,7,2,7,2,10,5,10,5,7,10,2,5,7,10,2,5,7,2,7,2,7,2,7,2,5,7,10,2,5,7,10,2,5,7,10,2,5,7,2,10,5,7,10,2,5,7,7,10,2,5,7,10,2,5,7,10,2,5,7,10,2,5,7,10,2,5,17,18,18,0,0],"f":[0,0,0,0,0,0,0,0,[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],1],[[],1],0,0,[[],1],[[],1],0,[[2,3],4],[[5,3],4],[[]],[[]],[[]],[[]],[6,[[9,[7,8]]]],[6,[[9,[10,8]]]],[6,[[9,[2,8]]]],[6,[[9,[5,8]]]],[6,[[9,[7,8]]]],[6,[[9,[10,8]]]],[6,[[9,[2,8]]]],[6,[[9,[5,8]]]],[[],[[12,[11]]]],[[],[[12,[11]]]],[13,14],[13,14],[[]],[[]],[[]],[[]],[7,15],[[],9],[[],9],[[],9],[[],9],[[],9],[[],9],[[],9],[[],9],[[],16],[[],16],[[],16],[[],16],[[7,6],[[9,[8]]]],[[10,6],[[9,[8]]]],[[2,6],[[9,[8]]]],[[5,6],[[9,[8]]]],[[7,6],[[9,[8]]]],[[10,6],[[9,[8]]]],[[2,6],[[9,[8]]]],[[5,6],[[9,[8]]]],0,0,0,0,0],"p":[[3,"Command"],[3,"SierraCommands"],[3,"Formatter"],[6,"Result"],[4,"SierraSubCommands"],[3,"ArgMatches"],[3,"Command"],[6,"Error"],[4,"Result"],[4,"Commands"],[3,"Id"],[4,"Option"],[15,"str"],[15,"bool"],[6,"Result"],[3,"TypeId"],[13,"Sierra"],[13,"CompileToLlvm"]]},\
"shenlong_core":{"doc":"","t":[0,0,3,11,11,12,11,11,11,12,11,11,12,12,12,11,11,11,12],"n":["sierra","llvm_compiler","Compiler","borrow","borrow_mut","builder","compile_from_code","compile_from_file","compile_sierra_program_to_llvm","context","from","into","module","output_path","program","try_from","try_into","type_id","variables"],"q":["shenlong_core","shenlong_core::sierra","shenlong_core::sierra::llvm_compiler","","","","","","","","","","","","","","","",""],"d":["Sierra related modules.","","Compiler is the main entry point for the LLVM backend. It …","","","","Compile a Sierra program code to LLVM IR.","Compile a Sierra program file to LLVM IR.","Compiles a Sierra <code>Program</code> representation to LLVM IR.","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","",""],"i":[0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"f":[0,0,0,[[]],[[]],0,[[1,1],2],[[1,1],2],[[3,1],2],0,[[]],[[]],0,0,0,[[],4],[[],4],[[],5],0],"p":[[15,"str"],[6,"Result"],[3,"Program"],[4,"Result"],[3,"TypeId"],[3,"Compiler"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};