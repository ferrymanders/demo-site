<?php
  $version = "2.2";
  $hostname = gethostname();
  
  $array = array( "$hostname" => "$version" );
  
  echo json_encode($array);
