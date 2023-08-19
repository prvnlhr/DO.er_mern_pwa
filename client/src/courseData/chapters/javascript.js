
import { addUUIDToChapters } from "../helperFunction/createUniqueObjectId"

const javascriptChaptersList = [
    {
        chapterName: 'JavaScript Introduction',
        is_bookmarked: false,
        time_required: '5 min',
        chapterFolderName: '1_javascript_introduction',
        topicsList: [
            {
                topicName: 'What is JavaScript',
                topicFileName: '1_what_is_js',
            },
            {
                topicName: 'JavaScript Console & Web Development Tools',
                topicFileName: '2_console_and_web_dev_tools'
            },
            {
                topicName: 'JavaScript Hello World',
                topicFileName: '3_hello_world_program'
            },
        ]
    },
    {
        chapterName: 'Fundamentals of JS',
        is_bookmarked: false,
        time_required: '25 min',
        chapterFolderName: '2_fundamentals_of_js',

        topicsList: [
            {
                topicName: 'Basics of JS Syntax',
                topicFileName: '1_syntax_in_js'
            },
            {
                topicName: 'Variables in JS',
                topicFileName: '2_variables_in_js'
            },
            {
                topicName: 'Data types in JS',
                topicFileName: '3_data_types_in_js'
            },
            {
                topicName: 'JavaScript Number',
                topicFileName: '4_number_in_js'
            },
            {
                topicName: 'Javascript String ',
                topicFileName: '5_string_in_js'
            },
            {
                topicName: 'Objects in JavaScript',
                topicFileName: '6_objects_in_js'
            },
            {
                topicName: 'Primitive vs Reference values',
                topicFileName: '7_primitive_vs_reference_values'
            },
            {
                topicName: 'Arrays in JS',
                topicFileName: '8_arrays_in_js'
            },
        ]
    },
    {
        chapterName: 'Operators in JavaScript',
        is_bookmarked: false,
        time_required: '20 min',
        chapterFolderName: '3_operators_in_js',

        topicsList: [
            {
                topicName: 'Arithmetic operators',
                topicFileName: '1_arithmetic_operator'
            },
            {
                topicName: 'Assignment operators',
                topicFileName: '2_assignment_operators'
            },
            {
                topicName: 'Unary operators',
                topicFileName: '3_unary_op'
            },
            {
                topicName: 'Comparison operators',
                topicFileName: '4_comparision_op'
            },
            {
                topicName: 'Logical operators',
                topicFileName: '5_logical_op'
            },
            {
                topicName: 'Logical assignment & Nullish coalescing operator',
                topicFileName: '6_logical_assignment_and_coal_op'
            },
            {
                topicName: 'Exponential operator',
                topicFileName: '7_exponential_op'
            },
        ]
    },
    {
        chapterName: 'JS Control Flow',
        is_bookmarked: false,
        time_required: '20 min',
        chapterFolderName: '4_control_flow_statements',

        topicsList: [
            {
                topicName: 'if statement',
                topicFileName: '1_if'
            },
            {
                topicName: 'if...else',
                topicFileName: '2_if_else'
            },
            {
                topicName: 'if...else...if',
                topicFileName: '3_if_else_if'
            },
            {
                topicName: 'Ternary operators',
                topicFileName: '4_ternary_operators'
            },
            {
                topicName: 'Switch in JS',
                topicFileName: '5_switch'
            },
            {
                topicName: 'While Loop in JS',
                topicFileName: '6_while'
            },
            {
                topicName: 'For Loop in JS',
                topicFileName: '7_for_loop'
            },
            {
                topicName: 'Break & Continue in JS ',
                topicFileName: '8_break_continue'
            },
        ]
    },
    {
        chapterName: 'JavaScript Functions',
        is_bookmarked: false,
        time_required: '30 min',
        chapterFolderName: '5_function_in_js',

        topicsList: [
            {
                topicName: 'Introduction to JS functions',
                topicFileName: '1_js_functions'
            },
            {
                topicName: 'Functions - The first class citizen',
                topicFileName: '2_functions_as_first_class_citizen'
            },
            {
                topicName: 'Recursive functions in JS',
                topicFileName: '3_recursive_functions'
            },
            {
                topicName: 'Default parameters in JS',
                topicFileName: '4_default_parameter'
            },
        ]
    },
    {
        chapterName: 'Advance functions in JS',
        is_bookmarked: false,
        time_required: '25 min',
        chapterFolderName: '6_advance_functions',

        topicsList: [
            {
                topicName: 'Functions types',
                topicFileName: '1_function_type'
            },
            {
                topicName: 'Call, Bind and Apply',
                topicFileName: '2_call_apply_bind'
            },
            {
                topicName: 'Arrow function',
                topicFileName: '3_arrow_function'
            },
            {
                topicName: 'Immediately Invoke Function Expression',
                topicFileName: '4_iife'
            },
            {
                topicName: 'JavaScript Closures',
                topicFileName: '5_closure'
            },
            {
                topicName: 'Currying',
                topicFileName: '6_currying_in_js'
            },
            {
                topicName: 'Rest & Spread operators',
                topicFileName: '7_rest_spread_operators_in_js'
            },
            {
                topicName: 'Callback functions',
                topicFileName: '8_callback_functions'
            },
        ]
    },
]

const updatedListWithID = addUUIDToChapters(javascriptChaptersList);

export { updatedListWithID };
