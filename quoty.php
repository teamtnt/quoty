<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://example.com
 * @since             1.0.0
 * @package           Quoty
 *
 * @wordpress-plugin
 * Plugin Name:       Quoty
 * Plugin URI:        http://example.com/quoty/
 * Description:       A simple plugin for sharing selected text on social networks.
 * Version:           1.0.0
 * Author:            TNT Studio
 * Author URI:        http://www.tntstudio.us/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       quoty
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-quoty-activator.php
 */
function activate_Quoty() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-quoty-activator.php';
	Quoty_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-quoty-deactivator.php
 */
function deactivate_Quoty() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-quoty-deactivator.php';
	Quoty_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_Quoty' );
register_deactivation_hook( __FILE__, 'deactivate_Quoty' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-quoty.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_Quoty() {

	$plugin = new Quoty();
	$plugin->run();

}
run_Quoty();
