#pragma strict

function Update () {
	transform.Rotate(new Vector3(0,0,60) * Time.deltaTime);
}