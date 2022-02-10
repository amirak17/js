<!--
Docs:
https://www.youtube.com/watch?v=QhoG_vkFWYY
https://github.com/stripe/stripe-php
https://stripe.com/docs/payments/accept-a-payment-charges 
https://stripe.com/docs/api/subscriptions/create?lang=php

Install:
composer require stripe/stripe-php
-->

<?php require_once('config.php'); ?>

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<script src="https://js.stripe.com/v3/"></script>

<title>Stripe Seamless Subscription Checkput </title>
<h3>Stripe Seamless Subscription Checkput </h3>

<form name="form1" method="POST" action="process.php" id="payment-form" style="width: 300px">
	<span class="payment-errors"></span>
	Name <br /> <input type="text" name="cname" /><br /><br />
	Email <br /> <input type="text" name="email" /><br /><br />
	Payment Card <br />
	<div id="card-element"></div>
	<div id="card-errors" role="alert"></div><br /><br />
	<button type="submit">Submit</button>
</form>

<script type="text/javascript">
	var stripe = Stripe('<?php echo $p_key;?>');
</script>
<script src="app.js"></script>