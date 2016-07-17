#pragma strict

var player : GameObject;
var offset : Vector3;

function Start () {
	offset = transform.position - player.transform.position;
}

function FixedUpdate () {
	var smooth : float = 1;
	transform.position = Vector3.Lerp(transform.position, player.transform.position + offset, smooth * Time.deltaTime);
}