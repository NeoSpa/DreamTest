#pragma strict
var speed : float;
var amplitude : float;

function FixedUpdate () {
	transform.position.y = transform.position.y + amplitude * Mathf.Sin(speed * Time.time);
}