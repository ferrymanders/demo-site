<?php
  $version = "1.0";
  $hostname = gethostname();
  
  $array = array( "$hostname" => "$version" );
  
  echo json_encode($array);
