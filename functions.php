<?php
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/modal.js', array( 'jquery' ), '1.0.0' , true );

}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

//add new code here