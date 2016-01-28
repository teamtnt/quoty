<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://wordpress.org/plugins/quoty/
 * @since             1.0.0
 * @package           Quoty
 *
 * @wordpress-plugin
 * Plugin Name:       Quoty
 * Plugin URI:        https://wordpress.org/plugins/quoty/
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
 * This action is documented in includes/class-gens-votely-activator.php
 */
function activate_quoty() {
    //we preselect all of the platforms
    $platforms = array('social-platforms' => ['facebook', 'twitter','googleplus','pinterest','linkedin'] );
    update_option( 'quoty_options', $platforms);
}

register_activation_hook( __FILE__, 'activate_quoty' );

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
