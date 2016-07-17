#pragma strict

var player : GameObject;
var offset : Vector3;
var initialOffset : Vector3;
var hit : RaycastHit;
var camPosition : GameObject[];
var positionIndex : int = 0;
var smooth : float;

function Start () {
	initialOffset = transform.position - player.transform.position;
}

function FixedUpdate () {
	transform.LookAt(player.transform);

	if (!Physics.Linecast(player.transform.position, camPosition[positionIndex].transform.position)) {
		transform.position = Vector3.Lerp(transform.position, camPosition[positionIndex].transform.position, smooth * Time.deltaTime);
		Debug.DrawLine(player.transform.position, camPosition[positionIndex].transform.position);
	}
}

