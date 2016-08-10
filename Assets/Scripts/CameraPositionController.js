#pragma strict

var player : GameObject;
var offset : Vector3;
var smooth : float;

function Start () {
	offset = transform.position - player.transform.position;
}

function FixedUpdate () {
	transform.position = Vector3.Lerp(transform.position, player.transform.position + offset, smooth * Time.deltaTime);
}