<?php
  $version = "2.0";
  $hostname = gethostname();
  
  $array = array( "$hostname" => "$version" );
  
  echo json_encode($array);
