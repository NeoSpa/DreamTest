#pragma strict

function OnCollisionEnter (other : Collision) {
	var mainCamera = GameObject.FindGameObjectsWithTag('MainCamera')[0];

	if (other.gameObject.CompareTag('Player')) {
		Debug.Log(mainCamera);
	}
}