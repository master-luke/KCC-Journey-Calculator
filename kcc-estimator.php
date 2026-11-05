<?php
/**
 * Plugin Name: KCC Journey Estimator (Learning Prototype)
 * Description: A private-journey estimate block with illustrative pricing. No bookings or payments.
 * Version: 0.1.0
 * Requires at least: 6.3
 */
defined( 'ABSPATH' ) || exit;

add_action( 'init', static function () {
    register_block_type( __DIR__ );
} );

