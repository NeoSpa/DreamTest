#pragma strict

var rb : Rigidbody;
var speed : float;
var count : int;
var countText : UnityEngine.UI.Text;
var winText : UnityEngine.UI.Text;
var countSound : AudioClip;
var jumpSound : AudioClip;
var initialAudioPitch : float = 0.9;
var audioSourceCoin : AudioSource;
var audioSource : AudioSource;

function _isGrounded() : boolean {
	var hit : RaycastHit;
	var distanceToGround : float; 

    if (Physics.Raycast(transform.position, -Vector3.up, hit)) {
         distanceToGround = hit.distance;

         if(distanceToGround <= 1) 
         	return true;
    }

    return false;
}

function Start() {
	rb = GetComponent(Rigidbody);
	count = 0;
	SetCountText();
	winText.text = '';
	audioSourceCoin.pitch = initialAudioPitch;
}

function FixedUpdate() {
	var moveHorizontal : float = Input.GetAxis('Horizontal');
	var moveVertical : float = Input.GetAxis('Vertical');
	var movement : Vector3 = new Vector3(moveHorizontal, 0.0f, moveVertical);

	rb.AddForce(movement * speed);
}

function Update() {
	var up : Vector3 = new Vector3(0.0f, 46f, 0.0f);
	var down : Vector3 = new Vector3(0.0f, -8f, 0.0f);

	if(_isGrounded() && Input.GetAxis('Jump') && rb.velocity.y < 10) {
		rb.AddForce(up * speed);
		audioSource.PlayOneShot(jumpSound);
	}
	else {
		rb.AddForce(down * speed);
	}
}

function OnTriggerEnter(other : Collider) {
	if(other.gameObject.CompareTag('Pick Up')) {
		other.gameObject.SetActive(false);
		count += 1;
		audioSourceCoin.PlayOneShot(countSound);

		if (audioSourceCoin.pitch == 2) {
			audioSourceCoin.pitch = initialAudioPitch;
		} else {
			audioSourceCoin.pitch += 0.1;
		}

		SetCountText();
	}

	if(other.gameObject.CompareTag('Death Stuff'))
		transform.position = new Vector3(0,10,0);
}

function SetCountText() {
	countText.text = count.ToString();

	if (count >= 6) {
		winText.text = 'g r e a t . . .';
		countText.text = '';
	}
}

