<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Quoty
 * @subpackage Quoty/public/partials
 */
?>
<?php
$platforms = [];
$selector = ".entry-content p";
if(isset(get_option('quoty_options' )['social-platforms'])) {
 $platforms = get_option('quoty_options' )['social-platforms'];
}
if(isset(get_option('quoty_options' )['css-selector'])) {
    if(get_option('quoty_options' )['css-selector'] != "")
    $selector = get_option('quoty_options' )['css-selector'];
}
?>
<div id="quotyContainer" platforms="<?php echo implode('|', $platforms)?>" selector="<?php echo $selector ?>"></div>
