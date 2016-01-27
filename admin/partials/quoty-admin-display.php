<?php

/**
 * Provide a dashboard view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    sb_bar
 * @subpackage sb_bar/admin/partials
 */
?>

<div class="wrap">
  <div id="poststuff">
    <div id="post-body" class="metabox-holder columns-2">
      <div id="postbox-container-2" class="postbox-container">
            <div id="top-sortables" class="meta-box-sortables ui-sortable">
              <div id="itsec_self_protect" class="postbox ">
                <h3 class="hndle"><span>Quoty Settings Page</span></h3>
                <div class="inside">
                  <p>Thank you for installing Quoty!</p>
                  <p>Quoty is a simple plugin that lets you share any text selected on the page. Currently supported platforms are: Twitter, Facebook, LinkedIn, Pinterest and GooglePlus</p>
                </div>
              </div>
            </div>
            <form method="post" action="options.php">       
              <div id="normal-sortables" class="meta-box-sortables ui-sortable">
                <div id="itsec_get_started" class="postbox ">
                  <h3 class="hndle"><span>General Settings</span></h3>
                  <div class="inside">
                    <?php 
                      settings_fields( 'quoty_options' );

                      do_settings_sections( 'quoty' );

                      submit_button( 'Save Settings' );
                    ?>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
            </form>

      </div>
      <div id="postbox-container-1" class="postbox-container">
        <div id="priority_side-sortables" class="meta-box-sortables ui-sortable">
          <div id="itsec_security_updates" class="postbox ">
            <h3 class="hndle"><span>Say hello</span></h3>
            <div class="inside">
              <div id="mc_embed_signup">
                <p>If you like this plugin you can start following us on <a target="_blank" href="https://twitter.com/tntstudiohr">Twitter</a> or drop us an <a href="mailto:info@tntstudio.hr" target="_blank">email</a></p>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>